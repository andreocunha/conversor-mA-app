import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingHorizontal: 15,
      paddingVertical: 20
    },
    title: {
      fontSize: 40,
      fontWeight: '700',
      color: theme.colors.blue,
    },
    infoContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    info: {
      width: '100%',
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: theme.colors.blue,
    },
    infoTitle:{
      fontSize: 22,
      fontWeight: '700',
    },
    infoValue:{
      fontSize: 22,
      fontWeight: '700',
      color: theme.colors.red
    },
    inicialValuesContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    input: {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      width: 100,
      height: 35,
      fontWeight: '700',
      fontSize: 15,
      paddingLeft: 7,
      borderRadius: 8,
      shadowOpacity: 0.7,
      shadowRadius: 3,
      shadowOffset: {
        height: 0,
        width: 0,
      },
      elevation: 2.5,
    },
    sliderContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }
});
  