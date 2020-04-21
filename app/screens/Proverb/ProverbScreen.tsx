import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal'
import ProverdCategory from '../../components/ProverdCategory';
import AdsCard from '../../components/AdsCard';
import Placeholder from '../../components/Placeholder';
import { addAdsInArray } from '../../services/mapping.service';
import _styles from '../../_styles';
import More from 'react-native-vector-icons/MaterialIcons';
import modules from '../../modules';
import Icon from 'react-native-vector-icons/FontAwesome'
import Share from 'react-native-vector-icons/Feather'
import PlaceholderCategory from '../../components/PlaceholderCategory';


interface Props {
    loading: boolean
    proverd: any[];
    loadingMore: boolean
    loadingRefresh: boolean
    onEndReached: any
    onStartReached: any
    onRefesh: () => void
    onMore: () => void
    adsDoc: any;
    onShare: any
}
export default ({ onShare, adsDoc, loading, proverd,  loadingMore, loadingRefresh, onEndReached, onStartReached, onMore, onRefesh }: Props) => {
    const dataContent: any = addAdsInArray(proverd, adsDoc,5);
    const [visable, setVisable] = React.useState(false);

    return (
        <View >
            <View  >

                {loading ? <PlaceholderCategory /> :
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

                                    <ProverdCategory
                                        proverd={item}

                                        onShare={onShare}
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
    if (loadingMore) return <ActivityIndicator color={'white'} size={'small'} />
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
        height: modules.VIEW_PORT_HEIGHT / 4.5,
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
        fontSize: 30,
        margin: 16
    },
    text: {
        color: modules.SUB_TEXT,
        fontSize: 16,
    },
    Desc: {
        fontSize: 12,
        color: modules.SUB_TEXT,

    },


})


