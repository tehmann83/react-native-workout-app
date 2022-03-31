import React, { FunctionComponent, useState } from 'react';
import { Modal as DefaultModal, StyleSheet, Text, View } from 'react-native';
import PressableText from '../PressableText';

type ModalProps = {
	activator?: FunctionComponent<{
		handleOpen: () => void;
	}>;
};

const Modal = ({ activator: Activator }: ModalProps) => {
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
			{Activator ? (
				<Activator handleOpen={() => setModalVisible(true)} />
			) : (
				<PressableText text="Open" onPress={() => setModalVisible(true)} />
			)}
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
