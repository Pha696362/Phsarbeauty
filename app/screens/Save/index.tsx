import * as React from "react";
import { View, StyleSheet, Text,Share, StatusBar } from "react-native";
import { inject, observer } from "mobx-react";
import SaveTabScreen from "./SaveTabScreen";

interface Props {
  bookmark: any,
  content: any,
  navigation: any
}
interface State { 
  saveData: boolean
  selectedItem:any
}
@inject('bookmark', 'content')
@observer
export default class SaveTabContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      saveData: false,
      selectedItem: null,
    };
  }
 async componentDidMount() {
  StatusBar.setBarStyle('dark-content');
    this.props.bookmark.fetchFavorite()
    const { selectedDetail } = await this.props.content;
    await this.props.bookmark.fetchSave(selectedDetail.key)
  }
  _onCategory = (item: any) => {
    this.props.content.fetchDetail(item)
    this.props.navigation.navigate('Detail')
  }
  _onDelete = () => {
    this.props.bookmark.minusFavorite()
  }
  _onUnSave = async () => {
    const { selectedDetail } = await this.props.content;
    await this.props.bookmark.deleteFavorite(selectedDetail.key);
    await this.props.bookmark.fetchFavorite();
    this.setState({ saveData: !this.state.saveData })
  };

  _onShare = async () => {
    // const key = this.props.content.dataSelected.key;
    const key = this.props.content.selectedDetail.key
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
  public render() {
   const { favoriteDoc, progress } = this.props.bookmark

    return <SaveTabScreen
      data={favoriteDoc}
      progress={progress}
      onDetail={this._onCategory}
      onDelete={this._onDelete}
      onUnsave={this._onUnSave}
      onShare = {this._onShare}
    />;
  }
}
