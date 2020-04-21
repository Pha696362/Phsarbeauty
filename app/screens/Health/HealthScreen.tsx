import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import _styles from '../../_styles'
import AdsCard from '../../components/AdsCard';
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome'
import Share from 'react-native-vector-icons/Feather'
import modules from '../../modules';
import { useState } from 'react';
import Placeholder from '../../components/Placeholder';
import CardnewsCategory from '../../components/CardnewsCategory';
import { addAdsInArray } from '../../services/mapping.service';
import PlaceholderCategory from '../../components/PlaceholderCategory';
import Cancel from 'react-native-vector-icons/MaterialIcons'

interface Props {
    loading: boolean
    health: any[];
    onPress: (item: any) => void
    loadingMore: boolean
    loadingRefresh: boolean
    onEndReached: any
    onStartReached: any
    onRefesh: () => void
    onMore: () => void
    adsDoc: any;
    onSave: () => void
    onUnSave: () => void
    onModal: (item: any) => void
    saveData: boolean
    onShare: any
    onClose: any
}

export default ({ onClose, onShare, saveData, onSave, onUnSave, onModal, adsDoc, loading, onPress, health, loadingMore, loadingRefresh, onEndReached, onStartReached, onMore, onRefesh }: Props) => {
    const dataContent: any = addAdsInArray(health, adsDoc, 5);
    const [visable, setVisable] = useState(false);

    return (

        <View style={{ flex: 1 }}>

            <View style={_styles.container} >
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
                            <TouchableOpacity style={[styles.body, { borderBottomColor: '#fff' }]} onPress={() => {
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



                {loading ?
                    <PlaceholderCategory />
                    :
                    <FlatList
                        data={dataContent}
                        showsVerticalScrollIndicator={false}
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
                            const { isAdd } = item;
                            if (isAdd) {
                                return (
                                    <View>
                                        <AdsCard fileurl={item.fileurl} />
                                    </View>
                                );
                            } else {
                                return (
                                    <CardnewsCategory data={item}
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

        </View>

    );


};
const renderFooter = (loadingMore: boolean) => {

    return <View style={{ height: 80 }} />
}


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        margin: 0,
        justifyContent: 'flex-end',


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

    Desc: {
        fontSize: 12,
        color: modules.SUB_TEXT,

    },
    content: {
        width: modules.VIEW_PORT_WIDTH,
        height: modules.VIEW_PORT_HEIGHT / 3.5,


    },
    icon: {
        fontSize: 26,
        margin: 16
    },
    text: {
        color: modules.SUB_TEXT,
        fontSize: 16,
        marginLeft: 20
    },
})

