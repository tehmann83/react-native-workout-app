import React, { useState } from 'react';
import { Modal as DefaultModal, StyleSheet, Text, View } from 'react-native';
import PressableText from '../PressableText';

const Modal = () => {
	const [isModalVisible, setModalVisible] = useState(false);

	return (
		<>
			<DefaultModal
				visible={isModalVisible}
				transparent={false}
				animationType="fade"
			>
				<View style={styles.centerView}>
					<Text>Hello there</Text>
					<PressableText text="Close" onPress={() => setModalVisible(false)} />
				</View>
			</DefaultModal>
			<PressableText
				text="Check Sequence"
				onPress={() => setModalVisible(true)}
			/>
		</>
	);
};

export default Modal;

const styles = StyleSheet.create({
	centerView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
