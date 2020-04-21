import * as React from "react";
import { View, } from "react-native";

import { Placeholder, Fade, PlaceholderMedia, PlaceholderLine } from "rn-placeholder";
interface Props {

}
export default ({ }: Props) => {
  return (
    <View style ={{paddingHorizontal:12}}>
      <Placeholder
        Animation={Fade}

        // Right={PlaceholderMedia}
          >
        <PlaceholderLine height={140} noMargin style={{ marginBottom: 15 }} />
        <View style={{ paddingHorizontal: 12 }}>
          <PlaceholderLine width={40} />
          <PlaceholderLine />
        </View>
      </Placeholder>
      <Placeholder/>
      <Placeholder
        Animation={Fade}

        // Right={PlaceholderMedia}
          >
        <PlaceholderLine height={140} noMargin style={{ marginBottom: 15 }} />
        <View style={{ paddingHorizontal: 12 }}>
          <PlaceholderLine width={40} />
          <PlaceholderLine />
        </View>
      </Placeholder>
      <Placeholder/>
      <Placeholder
        Animation={Fade}

        // Right={PlaceholderMedia}
          >
        <PlaceholderLine height={140} noMargin style={{ marginBottom: 15 }} />
        <View style={{ paddingHorizontal: 12 }}>
          <PlaceholderLine width={40} />
          <PlaceholderLine />
        </View>
      </Placeholder>
      <Placeholder/>
      <Placeholder
        Animation={Fade}

        // Right={PlaceholderMedia}
          >
        <PlaceholderLine height={140} noMargin style={{ marginBottom: 15 }} />
        <View style={{ paddingHorizontal: 12 }}>
          <PlaceholderLine width={40} />
          <PlaceholderLine />
        </View>
      </Placeholder>
      <Placeholder/>
      <Placeholder
        Animation={Fade}

        // Right={PlaceholderMedia}
          >
        <PlaceholderLine height={140} noMargin style={{ marginBottom: 15 }} />
        <View style={{ paddingHorizontal: 12 }}>
          <PlaceholderLine width={40} />
          <PlaceholderLine />
        </View>
      </Placeholder>
      <Placeholder/>

        
    </View>


  );
};


