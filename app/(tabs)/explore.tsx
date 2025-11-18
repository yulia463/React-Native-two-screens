import { Image } from 'expo-image';
import {Platform, StyleSheet, View} from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';

export default function TabTwoScreen() {
  return (
      <View>
      <Collapsible title="File-based routing">

        <ExternalLink href="https://docs.expo.dev/router/introduction">
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">

      </Collapsible>
      <Collapsible title="Images">

        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">

      </Collapsible>
      </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
