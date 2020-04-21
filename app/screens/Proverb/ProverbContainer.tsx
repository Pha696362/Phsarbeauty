import * as React from 'react';
import { View, StyleSheet, Text, Share } from 'react-native';
import { observer, inject } from 'mobx-react';
import { NavigationStackProp } from 'react-navigation-stack';
import ProverbScreen from './ProverbScreen';


interface Props {
    navigation: NavigationStackProp
    loading: boolean;
    proverd: any;
    content: any;
    adsDoc: any;
    ads:any;
    bookmark:any
}

interface State {
    bookmark:Boolean
    selectedItem:any
}
@inject('proverd', 'content','ads','bookmark')
@observer
export default class ProverbContainer extends React.Component<Props, State> {
    onEndReachedCalledDuringMomentum: boolean;
    constructor(props: Props) {
        super(props);
        this.state = {
            bookmark : false,
            selectedItem:null
        };
        this.onEndReachedCalledDuringMomentum = true
    }
     async componentDidMount() {
        this.props.proverd.fetchProverd()

        //  firebase.firestore().collection("category").onSnapshot(docs=>{
        //      console.log(docs.size)
        //  })
    }
    onStartReached = () => {
        this.onEndReachedCalledDuringMomentum = false
    }

    onEndReached = () => {
        this.onEndReachedCalledDuringMomentum = true
    }

    _onMore = async () => {
      
        await this.props.proverd.fetchMoreProverd()
    }

    _onRefresh = async () => {
        await this.props.content.fetchRefreshProverd()
    }

 
    _onShare = async () => {

        // const key = this.props.proverd.selectedDetail.key
        const key = this.props.proverd.key

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
        const { loading, proverd,loadingMore, loadingRefresh } = this.props.proverd
        const {adsDoc} =this.props.ads

        return (
            <ProverbScreen
                adsDoc={adsDoc}
                loading={loading}
                proverd={proverd}
                loadingRefresh={loadingRefresh}
                loadingMore={loadingMore}
                onMore={this._onMore}
                onRefesh={this._onRefresh}
                onEndReached={this.onEndReached}
                onStartReached={this.onStartReached}
                onShare={this._onShare}
            />


        );
    }
}
