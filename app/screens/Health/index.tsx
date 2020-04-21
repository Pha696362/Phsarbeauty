import * as React from 'react';

import { observer, inject } from 'mobx-react';
import { NavigationStackProp } from 'react-navigation-stack';
import HealthScreen from './HealthScreen';
import { Share, StatusBar } from 'react-native';
interface Props {
    navigation: NavigationStackProp
    loading: boolean;
    health: any;
    content: any
    ads: any;
    bookmark: any;
    relatedcontent:any
}
interface State {
    bookmark: boolean
    selectedItem: any
    isModalVisible: boolean,
}
@inject('health', 'content', 'ads', 'bookmark','relatedcontent')
@observer
export default class HealthContainer extends React.Component<Props, State> {
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
    componentDidMount() {
        StatusBar.setBarStyle('dark-content');
        this.props.health.fetchHealth()

    }
    onStartReached = () => {
        this.onEndReachedCalledDuringMomentum = false
    }

    onEndReached = () => {
        this.onEndReachedCalledDuringMomentum = true
    }


    _onMore = async () => {

        await this.props.health.fetchMoreHealth()
    }

    _onRefresh = async () => {
        await this.props.health.fetchRefreshHealth()
    }

    _onHealth = (item: any) => {
        this.props.content.fetchDetail(item)
        this.props.navigation.navigate('Detail')
        this.props.relatedcontent.fetchRelatedContent(item.category.key)

    }



    _onModal = (item: any) => {
        // console.log("item",item)
        this.setState({ selectedItem: item })
        this.props.bookmark.fetchSave(item.key)
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
    _onClose=()=>{
        this.setState({ isModalVisible: false })
    }
    render() {
        const { loading, health, loadingMore, loadingRefresh } = this.props.health
        const { adsDoc } = this.props.ads
        const { saveData } = this.props.bookmark

        return (
            <HealthScreen
                adsDoc={adsDoc}
                onPress={this._onHealth}
                loading={loading}
                health={health}
                loadingRefresh={loadingRefresh}
                loadingMore={loadingMore}
                onMore={this._onMore}
                onRefesh={this._onRefresh}
                onEndReached={this.onEndReached}
                onStartReached={this.onStartReached}
                onSave={this._onSave}
                onUnSave={this._onUnSave}
                onModal={this._onModal}
                saveData={saveData}
                onShare={this._onShare}
                onClose={this._onClose}
            />
        );
    }
}
