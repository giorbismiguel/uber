import {StyleSheet, Text, View} from 'react-native';

import styles from './styles';

const CovidMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Help flatten the curve. If you must travel, please exercise caution for
        you safety and the safety of our community
      </Text>
      <Text style={styles.learnMore}>Lear more...</Text>
    </View>
  );
};

export default CovidMessage;
