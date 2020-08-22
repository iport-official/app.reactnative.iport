import { Platform } from 'react-native'

export default {
    padding: 15,
    ...Platform.select({
        ios: { headerHeight: 64, haderPadding: 20 },
        android: { headerHeight: 44, haderPadding: 0 }
    }),
    tabBarHeight: 50,
}
