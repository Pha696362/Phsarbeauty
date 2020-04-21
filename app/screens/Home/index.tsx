import * as React from 'react';
import { View, StyleSheet, Text, Platform, Alert, Share, StatusBar } from 'react-native';
import HomeScreen from './HomeScreen';
import { inject, observer } from 'mobx-react';
import { NavigationStackProp } from 'react-navigation-stack';
import colors from '../../modules/colors';
interface Props {
    navigation: NavigationStackProp
    loading: boolean;
    content: any;
    messaging: any
    ads: any;
    bookmark: any
    data: any
    relatedcontent: any
}
interface State {
    bookmark: boolean,
    selectedItem: any
    isModalVisible: boolean,
}
@inject('content', 'messaging', 'ads', 'bookmark', 'relatedcontent')
@observer
export default class HomeScreenContainer extends React.Component<Props, State> {
    onEndReachedCalledDuringMomentum: boolean;
    constructor(props: Props) {
        super(props);
        this.state = {
            bookmark: false,
            selectedItem: null,
            isModalVisible: true,
        };
        this.onEndReachedCalledDuringMomentum = true
    }
    onStartReached = () => {
        this.onEndReachedCalledDuringMomentum = false
    }
    onEndReached = () => {
        this.onEndReachedCalledDuringMomentum = true
    }
    async componentDidMount() {
        StatusBar.setBarStyle('dark-content');
        await this.props.messaging.setUserToken();
        await this.props.messaging.checkPermission();
        await this.props.messaging.initialNotification();
        this.props.content.fetchContent();
        const { selectedDetail } = this.props.content;
        this.props.ads.fetchAds();
        await this.props.bookmark.fetchSave(selectedDetail.key);
        const { saveData } = this.props.bookmark;
        this.setState({ bookmark: saveData ? true : false });
        this.props.ads.fetchAds()
    }
    _onSave = async () => {
        const item = this.state.selectedItem
        this.props.content.fetchDetail(item)
        const { selectedDetail } = this.props.content;
        await this.props.bookmark.addFavorite(selectedDetail);
        await this.props.bookmark.fetchFavorite();
    };
    _onUnSave = async () => {
        const item = this.state.selectedItem
        const { selectedDetail } = this.props.content;
        await this.props.bookmark.deleteFavorite(item.key);
        await this.props.bookmark.fetchFavorite();
    };
    _onDetal = (item: any) => {
        this.props.content.fetchDetail(item)
        this.props.navigation.navigate('Detail')
        this.props.relatedcontent.fetchRelatedContent(item.category.key)

    }
    _onMore = async () => {
        // if (Platform.OS === 'ios') {
        //     if (!this.onEndReachedCalledDuringMomentum) {
        //         console.log("ios")
        //         await this.props.content.fetchMoreContent();
        //         this.onEndReachedCalledDuringMomentum = true
        //     }
        //     return
        // }
        await this.props.content.fetchMoreContent()
    }
    _onRefresh = async () => {
        await this.props.content.fetchRefreshContent()
    }


    _onModal = (item: any) => {
        this.setState({ selectedItem: item })
        this.props.bookmark.fetchSave(item.key)

    }
    _onClose = () => {
        this.setState({ isModalVisible: false })
    }
    _onShare = async () => {
        // const key = this.props.content.dataSelected.key;
        const key = this.state.selectedItem.key
        try {
            const result = await Share.share({
                message: `https://phsarbeauty.com/article/${key}`
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            console.log("object", error);
        }
    };
    render() {
        const { loading, content, loadingMore, loadingRefresh } = this.props.content
        const { adsDoc } = this.props.ads
        const { saveData } = this.props.bookmark

        // console.log('content', content)

        return (
            <HomeScreen
                adsDoc={adsDoc}
                onPress={this._onDetal}
                loading={loading}
                content={content}
                loadingRefresh={loadingRefresh}
                loadingMore={loadingMore}
                onMore={this._onMore}
                onRefesh={this._onRefresh}
                onEndReached={this.onEndReached}
                onStartReached={this.onStartReached}
                onSave={this._onSave}
                onModal={this._onModal}
                saveData={saveData}
                onUnSave={this._onUnSave}
                onShare={this._onShare}
                onClose={this._onClose}

            />

        );
    }
}