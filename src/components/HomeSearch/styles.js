import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#2b80ff',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#6e6e6e',
  },

  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottom: 1,
    borderColor: '#dbdbdb',
  },

  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },

  destinationText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default styles;
