
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator, Alert, StatusBar } from 'react-native';
import AdsCard from '../../components/AdsCard';
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome'
import Share from 'react-native-vector-icons/Feather'
import Cancel from 'react-native-vector-icons/MaterialIcons'
import { FlatList, SafeAreaView } from 'react-navigation'
import modules from '../../modules';
import Placeholder from '../../components/Placeholder';
import { addAdsInArray } from '../../services/mapping.service';
import _styles from '../../_styles';
import CardNewsFix from '../../components/CardNewsFix';
import CardnewsCategoryHome from '../../components/CardnewsCategoryHome';
interface Props {
    loading: boolean
    content: any[];
    onPress: (item: any) => void
    loadingMore: boolean
    loadingRefresh: boolean
    onEndReached: any
    onStartReached: any
    onRefesh: () => void
    onMore: () => void
    onSave: () => void
    onModal: (item: any) => void
    onUnSave: () => void
    adsDoc: any;
    data?: any;
    saveData: boolean
    onShare: any
    onClose:any

}
export default ({onClose, onUnSave, saveData, adsDoc, onShare, loading, onPress, content, loadingMore, loadingRefresh, onEndReached, onStartReached, onMore, onRefesh, onSave, onModal }: Props) => {
    const dataContent: any = addAdsInArray(content, adsDoc, 5);
    const [visable, setVisable] = useState(false);
    return (
        <View style={_styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor="#ffffff" />
            <Modal
                animationIn="fadeInUp"
                animationOut="fadeOutDown"
                style={styles.modalContainer}
                onBackdropPress={() => setVisable(!visable)}
                isVisible={visable}
               >
                <View style={styles.content}>
                    <View style={styles.center}>
                        <View style={styles.bodysave}>
                        </View>
                    </View>
                    <View style={styles.savestyles}>
                        {
                            saveData ?

                                <TouchableOpacity style={styles.body} onPress={() => {
                                    onUnSave()
                                    setVisable(!visable)

                                }} >
                                    <Icon style={styles.icon} name='star' />
                                    <View >
                                        <Text style={styles.text}>
                                            Unsave
                                 </Text>

                                    </View>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={styles.body} onPress={() => {
                                    onSave()
                                    setVisable(!visable)

                                }} >
                                    <Icon style={styles.icon} name='star-o' />
                                    <View >
                                        <Text style={styles.text}>
                                            Save for later
                                 </Text>

                                    </View>
                                </TouchableOpacity>
                        }

                        <TouchableOpacity style={[styles.body, { borderBottomColor: '#fff' }]} onPress={() => { onShare() }}>
                            <Share style={styles.icon} name='share' />
                            <View>
                                <Text style={styles.text}>
                                    Share
                               </Text>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.body, { borderBottomColor: '#fff' }]} onPress={()=>{
                            onClose()
                            setVisable(!visable) 
                            }} >
                           
                            <Cancel style={styles.icon} name='close' />
                            <View>
                                <Text style={styles.text}>
                                    Cancel
                               </Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>


            {loading ? <Placeholder /> :
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dataContent}
                    onRefresh={onRefesh}
                    refreshing={loadingRefresh}
                    onEndReached={onMore}
                    onEndReachedThreshold={0.5}
                    onMomentumScrollBegin={() => onStartReached}
                    onMomentumScrollEnd={() => onEndReached}
                    keyboardShouldPersistTaps="always"
                    ListFooterComponent={renderFooter(loadingMore)}
                    keyExtractor={(i, index) => index.toString()}
                    renderItem={({ item }: any) => {
                        const { isAdd, isBig } = item;
                        if (isAdd) {
                            return (
                                <AdsCard
                                    //   onClickAds={() => onclickAds(item.link)}
                                    fileurl={item.fileurl}
                                />
                            );
                        }
                        else if (isBig) {
                            return (
                                <CardnewsCategoryHome
                                    key={item.key}
                                    data={item}
                                    onPress={() => onPress(item)}
                                    onSave={() => {
                                        onModal(item)
                                        setVisable(!visable)
                                    }}

                                />

                            );

                        }

                        else {
                            return (
                                <CardNewsFix
                                    key={item.key}
                                    data={item}
                                    onPress={() => onPress(item)}
                                    onSave={() => {
                                        onModal(item)
                                        setVisable(!visable)
                                    }}
                                />
                            );

                        }
                    }}
                />
            }

        </View>
    );
};

const renderFooter = (loadingMore: boolean) => {
    if (loadingMore) return <ActivityIndicator color={'black'} size={'large'} />
    return <View style={{ height: 80 }} />
}
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        margin: 0,
        justifyContent: 'flex-end',
    },
    content: {
        width: modules.VIEW_PORT_WIDTH,
        height: modules.VIEW_PORT_HEIGHT / 3.5,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodysave: {
        height: 5,
        width: 60,
        borderRadius: 5,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        margin: 6


    },
    savestyles: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    body: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    },
    icon: {
        fontSize: 26,
        margin: 16
    },
    text: {
        color: modules.SUB_TEXT,
        fontSize: 16,
        marginLeft:20
    },
    Desc: {
        fontSize: 12,
        color: modules.SUB_TEXT,

    }
})