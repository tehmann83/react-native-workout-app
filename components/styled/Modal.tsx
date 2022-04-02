import React, { FunctionComponent, useState } from 'react';
import { Modal as DefaultModal, StyleSheet, View } from 'react-native';
import PressableText from '../PressableText';

type ModalProps = {
	activator?: FunctionComponent<{
		handleOpen: () => void;
	}>;
	children: FunctionComponent<{
		handleOpen: () => void;
		handleClose: () => void;
	}>;
};

const Modal = ({ activator: Activator, children }: ModalProps) => {
	const [isModalVisible, setModalVisible] = useState(false);

	const handleOpen = () => setModalVisible(true);
	const handleClose = () => setModalVisible(false);

	return (
		<>
			<DefaultModal
				visible={isModalVisible}
				transparent={false}
				animationType="fade"
			>
				<View style={styles.centerView}>
					<View style={styles.contentView}>
						{children({
							handleOpen,
							handleClose
						})}
					</View>
					<PressableText text="Close" onPress={handleClose} />
				</View>
			</DefaultModal>
			{Activator ? (
				<Activator handleOpen={handleOpen} />
			) : (
				<PressableText text="Open" onPress={handleOpen} />
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
	},
	contentView: {
		marginBottom: 20
	}
});
