import * as React from "react";
import AutoHeightWebView from "react-native-autoheight-webview";
import { StyleSheet, Dimensions, Platform } from "react-native";
const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");
interface Props {
  html?: any;
  Link?: any;
}

export default ({ html, Link }: Props) => {
  if (Link) {
    return (
      <AutoHeightWebView
        dataDetectorTypes="none"
        scrollEnabled={false}
        style={{ width: WIDTH, padding: 12 }}
        customStyle={`
      * {
        font-family: 'Battambang';
  color: #555;
      }
      a{
        pointer-events: none;
        text-decoration: none;
        color: #000; 
        font-size:16px;
        fontWeight: 800;
    }
    li{
        color:#2b2b2b;
    font-size:14px 
    }
      p {
       color:#2b2b2b;
    font-size:26px;

      }
   img{
  width:100%
   }

   h1{
    font-size:24px;
    line-height: 35px;
   }
   fb-video {
       color:#79fa12;
       font-size:36px;
       }
    `}
        files={[
          {
            href: "cssfileaddress",
            type: "text/css",
            rel: "stylesheet"
          }
        ]}
        source={{ uri: Link }}
        zoomable={false}
      />
    );
  }
  return (
    <AutoHeightWebView
      dataDetectorTypes="none"
      scrollEnabled={false}

      customStyle={`
      * {
        font-family: 'Battambang';
  color: #555;
      }
      a{
        pointer-events: none;
        text-decoration: none;
        color: #000; 
        font-size:16px;
        fontWeight: 800;
    }
    li{
        color:#2b2b2b;
    font-size:14px 
    }
      p {
       color:#2b2b2b;
    font-size:16px ;
  padding:12px ;
      }

   img{
    width:100vw !important;
    margin-left: -12px !important;
    margin-top:6px !important;
   }

   h1{
    font-size:24px;
    line-height: 35px;

   }
   fb-video {
       color:#79fa12;
       font-size:36px;
       }
    `}
      files={[
        {
          href: "cssfileaddress",
          type: "text/css",
          rel: "stylesheet"
        }
      ]}
      source={{
        html:
          `<html><head><link href="https://fonts.googleapis.com/css?family=Battambang&display=swap" rel="stylesheet"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>${html}</html>`
      }}
      zoomable={false}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    backgroundColor: "#2a2a2a",
    paddingVertical: Platform.OS == "android" ? 5 : 8,
    alignItems: "center"
  },
  fontSize: {
    fontSize: 24,
    fontWeight: "500",
    color: "#fff"
  },
  ImgLogo: {
    width: 30,
    height: 30
  }
});
