import React from 'react';
import { Modal, Platform } from 'react-native';
import {
  ModalBoxArea,
  ModalBox,
  ModalClose,
  ModalText,
  ModalBody,
} from './styles';

export function CustomModal(props) {
  return (
    <Modal visible={props.visible} transparent={true} animationType="fade">
      <ModalBoxArea behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ModalBox>
          <ModalClose onPress={props.closeAction} underlayColor="transparent">
            <ModalText>X</ModalText>
          </ModalClose>

          <ModalBody>{props.children}</ModalBody>
        </ModalBox>
      </ModalBoxArea>
    </Modal>
  );
}
