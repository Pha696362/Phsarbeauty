import * as React from 'react';
import { View, StyleSheet, Text, Share, StatusBar } from 'react-native';
import _styles from '../../_styles'
import { observer, inject } from 'mobx-react';
import { NavigationStackProp } from 'react-navigation-stack';
import LoveScreen from './LoveScreen';


interface Props {
    navigation: NavigationStackProp
    loading: boolean;
    love: any;
    content: any;
    adsDoc: any;
    ads:any;
    bookmark:any;
    relatedcontent:any
    
}

interface State {
    bookmark: boolean
    selectedItem:any
    isModalVisible: boolean,
}
@inject('love', 'content','ads','bookmark','relatedcontent')
@observer
export default class LoveContainer extends React.Component<Props, State> {
    onEndReachedCalledDuringMomentum: boolean;
    constructor(props: Props) {
        super(props);
        this.state = {
            bookmark: false,
            selectedItem:null,
            isModalVisible: true,
        };
        this.onEndReachedCalledDuringMomentum = true
    }

    componentDidMount() {
        StatusBar.setBarStyle('dark-content');

        this.props.love.fetchLove()
       
    }
    onStartReached = () => {
        this.onEndReachedCalledDuringMomentum = false
    }

    onEndReached = () => {
        this.onEndReachedCalledDuringMomentum = true
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
    _onMore = async () => {
      
        await this.props.love.fetchMoreLove()
    }

    _onRefresh = async () => {
        await this.props.love.fetchRefreshLove()
    }



    _onLove = (item: any) => {
        this.props.content.fetchDetail(item)
        this.props.navigation.navigate('Detail')
        this.props.relatedcontent.fetchRelatedContent(item.category.key)

    }
    _onModal = (item: any) => {
        // console.log("item",item)
        this.setState({ selectedItem: item })
        this.props.bookmark.fetchSave(item.key)

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

      _onClose=()=>{
        this.setState({ isModalVisible: false })
    }

    render() {
        const { loading, love,loadingMore, loadingRefresh } = this.props.love
        const {adsDoc} =this.props.ads
        const {saveData}= this.props.bookmark
        return (
            <LoveScreen
            adsDoc={adsDoc}
                onPress={this._onLove}
                loading={loading}
                love={love}
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
