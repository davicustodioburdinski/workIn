/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
import { ThemeCommonParams } from '@/Theme/theme.type'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, ...args }: ThemeCommonParams) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundSecondary: {
        backgroundColor: Colors.secondary,
      },
      backgroundWhite: {
        backgroundColor: Colors.white,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        borderWidth: 1,
        borderColor: Colors.text,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 50,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      //Personalizado
      modalViewFeedItem: {
        margin: 20,
        height: '80%',
        marginTop: '4%',
        width: '100%',
        backgroundColor: 'white',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      centeredViewFeedItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      centeredViewFeed: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
      },
      centeredViewFeedItemDetail: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
      },
      containerFeedTitle: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'flex-start',
        marginTop: 10,
        padding: 10,
        justifyContent: 'space-between',
      },
      containerFeedList: {
        flex: 1,
        marginTop: 16,
      },
      filterIcon: {
        marginLeft: '32%',
      },
      modalViewFeedItemDetail: {
        margin: 20,
        height: '80%',
        marginTop: '4%',
        width: '100%',
        backgroundColor: 'white',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      containerTitleFeedItemDetail: {
        flex: 1,
        flexDirection: 'row',
        right: 14,
        justifyContent: 'flex-end',
        alignSelf: 'flex-start',
      },
      containerModalFeedItemDeital: {
        flex: 8,
        alignItems: 'center',
      },
      imageFeedItemDetail: {
        minWidth: 350,
        maxWidth: 360,
        height: 122,
        borderRadius: 6,
        marginTop: 12,
      },
      containerDateFeedItemDetail: {
        minWidth: '100%',
        marginTop: 14,
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
      containerLinkFeedItemDetail: {
        minWidth: '100%',
        marginTop: 14,
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
      containerFeed: {
        flexDirection: 'row',
        marginBottom: 15,
        paddingHorizontal: '2%',
      },
      imageFeed: {
        width: 82,
        height: 82,
        borderRadius: 6,
      },
      containerInfoFeed: {
        flexDirection: 'column',
        width: '70%',
        marginLeft: 14,
      },
      containerHome: {
        flex: 1,
        backgroundColor: '#FCFCFC',
      },
      feedItemTitle: {
        marginBottom: 10,
        fontSize: 16,
        color: '#343434',
        width: '100%',
      },
      menuIconStyle: {
        alignSelf: 'center',
        marginRight: 10,
      },
      logoStyle: {
        marginLeft: 10,
        marginTop: 2,
        width: 150,
        height: 60,
      },
      closeIconFeed: {
        position: 'absolute',
        padding: 10,
        alignSelf: 'flex-end',
      },
      closeIconFeedItem: {
        position: 'absolute',
        top: 10,
        right: 14,
      },
      containerDrawerModal: {
        width: '85%',
        top: '5%',
        bottom: '11%',
        left: '8%',
        backgroundColor: 'white',
      },
      containerMenuDrawerTitle: {
        flex: 1,
        marginTop: '8%',
        marginLeft: '8%',
      },
      containerActionsDrawer: {
        flex: 8,
        flexDirection: 'column',
        padding: 20,
      },
      separatorStyle: {
        borderWidth: 0.4,
        borderColor: '#777679',
        borderTopWidth: 0.1,
      },
      containerButtonsDrawer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      containerButtonsActionsDrawerText: {
        marginLeft: 10,
        fontSize: 16,
        alignSelf: 'center',
      },
      modalViewFeed: {
        justifyContent: 'space-between',
        borderRadius: 10,
        height: '85%',
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      containerMenuCarousellItem: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
      },
      containerNewsCarousell: {
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        top: '2%',
      },
      titleNewsCarousell: {
        position: 'absolute',
        top: '5%',
        left: '5%',
        fontSize: 34,
        width: 245,
        color: '#FFFFFF',
      },
      cardMenuCarousell: {
        backgroundColor: '#fafafa',
        width: 100,
        height: 100,
        borderColor: '#00000029',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        elevation: 5,
        shadowOpacity: 0.3,
        marginLeft: 20,
        borderRadius: 5,
        padding: 10,
      },
      textTitleNewsCarousell: {
        color: Colors.text,
        fontSize: 16,
        marginBottom: 10,
        alignSelf: 'flex-start',
        marginLeft: 21,
      },
      buttonContainer: {
        flex: 0,
        backgroundColor: "#FFF",
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 4,
        justifyContent: 'center',
        width: '92%',
        height: 44,
        margin: 5,
      },
      buttonContainerInverted: {
        flex: 0,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: "#FFF",
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 4,
        justifyContent: 'center',
        width: '92%',
        height: 44,
        margin: 5,
      },
      textButtonContainer: {
        flex: 0,
        alignItems: 'center',
        borderRadius: 4,
        justifyContent: 'center',
        width: '92%',
        height: 44,
        marginVertical: 10,
      },
      linkButtonContainer: {
        flex: 0,
        alignItems: 'center',
        borderRadius: 4,
        justifyContent: 'center',
        width: '92%',
        height: 44,
        marginVertical: 10,
      },
      linkButtonText: {
        color: "#FFF",
      },
      inputContainer: {
        borderWidth: 1,
        borderColor: Colors.text,
        width: '100%',
        height: 56,
        borderRadius: 4,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 8,
      },
      card: {
        borderWidth: 1,
        borderColor: "#FFF",
        borderRadius: 10,
      },
      containerReportIncidentsDescriptions: {
        padding: 20,
        height: 330,
        width: 336,
        borderWidth: 1,
        alignItems: 'flex-start',
        borderColor: Colors.text,
        marginTop: '5%',
      },
    }),
  }
}
