import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function MontserratText(props: Text['props']) {
	return <Text style={styles.text} {...props} />;
}

const styles = StyleSheet.create({
	text: {
		fontFamily: 'montserrat'
	}
});
