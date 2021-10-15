/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  EditWorkoutContainer,
  NameInput,
  ExercisesArea,
  ButtonText,
  ExercisesList,
  SaveArea,
  SaveImage,
  ModalLabel,
  ModalMuscles,
  ModalInput,
  ModalMuscle,
  ModalMuscleImage,
  ModalArea,
  ModalAreaItem,
} from './styles';

import { DefaultButton } from '../../components/DefaultButton';
import { ExerciseItemEdit } from '../../components/ExerciseItemEdit';
import { CustomModal } from '../../components/CustomModal';

function EditWorkoutPage(props) {
  let workout =
    props.navigation.state.params && props.navigation.state.params.workout
      ? props.navigation.state.params.workout
      : false;

  const [name, setName] = useState(workout ? workout.name : '');
  const [id, setId] = useState(workout ? workout.id : '');
  const [exercises, setExercises] = useState(workout ? workout.exercises : []);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState('');
  const [modalName, setModalName] = useState('');
  const [modalMuscle, setModalMuscle] = useState('');
  const [modalSets, setModalSets] = useState('');
  const [modalReps, setModalReps] = useState('');
  const [modalLoad, setModalLoad] = useState('');

  useEffect(() => {
    props.navigation.setParams({
      workout: { id, name, exercises },
      addWorkout: props.addWorkout,
      editWorkout: props.editWorkout,
    });
  }, [name, exercises]);

  function generateId() {
    let uuid = Math.floor(Math.random() * 1000);

    const verifyUuid = exercises.find(i => i.id === uuid);

    if (verifyUuid) {
      uuid = generateId();
    }

    return uuid;
  }

  function handleDeleteExercise(exercise) {
    let newExercises = [...exercises];
    newExercises = newExercises.filter(i => i.id !== exercise.id);
    setExercises(newExercises);
  }

  function handleEditExercise(exercise) {
    setModalId(exercise.id);
    setModalName(exercise.name);
    setModalMuscle(exercise.muscle);
    setModalSets(exercise.sets);
    setModalReps(exercise.reps);
    setModalLoad(exercise.load);
    setModalVisible(true);
  }

  function handleModalSave() {
    let newExercise = [...exercises];

    if (
      modalName === '' ||
      modalMuscle === '' ||
      modalSets === '' ||
      modalReps === ''
    ) {
      alert('Por favor preencher as informações');
      return;
    }

    if (modalId) {
      let index = newExercise.findIndex(i => i.id === modalId);
      if (index > -1) {
        newExercise[index].name = modalName;
        newExercise[index].muscle = modalMuscle;
        newExercise[index].sets = modalSets;
        newExercise[index].reps = modalReps;
        newExercise[index].load = modalLoad;
      }
    } else {
      let newEx = {
        id: generateId(),
        name: modalName,
        muscle: modalMuscle,
        sets: modalSets,
        reps: modalReps,
        load: modalLoad,
      };

      newExercise.push(newEx);
    }

    setExercises(newExercise);
    setModalVisible(false);
  }

  function handleResetModal() {
    setModalId('');
    setModalName('');
    setModalMuscle('');
    setModalSets('');
    setModalReps('');
    setModalLoad('');
  }

  function handleAddExercise() {
    handleResetModal();
    setModalVisible(true);
  }

  return (
    <EditWorkoutContainer>
      <NameInput
        value={name}
        onChangeText={t => setName(t)}
        placeholder="Digite o nome do treino"
        placeholderTextColor="#ccc"
      />

      <ExercisesArea>
        <DefaultButton
          bgColor="#4ac34e"
          onPress={handleAddExercise}
          underlayColor="transparent">
          <ButtonText>Adicionar exercício</ButtonText>
        </DefaultButton>

        <ExercisesList
          data={exercises}
          renderItem={({ item }) => (
            <ExerciseItemEdit
              data={item}
              handleDelAction={() => handleDeleteExercise(item)}
              handleEditAction={() => handleEditExercise(item)}
            />
          )}
          keyExtractor={item => String(item.name)}
        />
      </ExercisesArea>

      <CustomModal
        visible={modalVisible}
        closeAction={() => setModalVisible(false)}>
        <ModalLabel>Músculo de foco</ModalLabel>

        <ModalMuscles horizontal={true} showsHorizontalScrollIndicator={false}>
          <ModalMuscle
            opacity={modalMuscle === 'abs' ? 1 : 0.3}
            onPress={() => setModalMuscle('abs')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/abs.png')}
            />
          </ModalMuscle>

          <ModalMuscle
            opacity={modalMuscle === 'back' ? 1 : 0.3}
            onPress={() => setModalMuscle('back')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/back.png')}
            />
          </ModalMuscle>

          <ModalMuscle
            opacity={modalMuscle === 'biceps' ? 1 : 0.3}
            onPress={() => setModalMuscle('biceps')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/biceps.png')}
            />
          </ModalMuscle>

          <ModalMuscle
            opacity={modalMuscle === 'chest' ? 1 : 0.3}
            onPress={() => setModalMuscle('chest')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/chest.png')}
            />
          </ModalMuscle>

          <ModalMuscle
            opacity={modalMuscle === 'gluteos' ? 1 : 0.3}
            onPress={() => setModalMuscle('gluteos')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/gluteos.png')}
            />
          </ModalMuscle>

          <ModalMuscle
            opacity={modalMuscle === 'legs' ? 1 : 0.3}
            onPress={() => setModalMuscle('legs')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/legs.png')}
            />
          </ModalMuscle>

          <ModalMuscle
            opacity={modalMuscle === 'shoulders' ? 1 : 0.3}
            onPress={() => setModalMuscle('shoulders')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/shoulders.png')}
            />
          </ModalMuscle>

          <ModalMuscle
            opacity={modalMuscle === 'triceps' ? 1 : 0.3}
            onPress={() => setModalMuscle('triceps')}
            underlayColor="transparent">
            <ModalMuscleImage
              source={require('../../assets/muscles/triceps.png')}
            />
          </ModalMuscle>
        </ModalMuscles>

        <ModalLabel>Nome do exercício</ModalLabel>
        <ModalInput value={modalName} onChangeText={t => setModalName(t)} />

        <ModalArea>
          <ModalAreaItem>
            <ModalLabel>Séries</ModalLabel>
            <ModalInput
              keyboardType="numeric"
              value={modalSets}
              onChangeText={t => setModalSets(t)}
            />
          </ModalAreaItem>

          <ModalAreaItem>
            <ModalLabel>Repetições</ModalLabel>
            <ModalInput
              keyboardType="numeric"
              value={modalReps}
              onChangeText={t => setModalReps(t)}
            />
          </ModalAreaItem>

          <ModalAreaItem>
            <ModalLabel>Carga</ModalLabel>
            <ModalInput
              keyboardType="numeric"
              value={modalLoad}
              onChangeText={t => setModalLoad(t)}
            />
          </ModalAreaItem>
        </ModalArea>

        <DefaultButton
          bgColor="#4ac34e"
          onPress={handleModalSave}
          underlayColor="transparent">
          <ButtonText>Salvar</ButtonText>
        </DefaultButton>
      </CustomModal>
    </EditWorkoutContainer>
  );
}

EditWorkoutPage.navigationOptions = ({ navigation }) => {
  let isEdit =
    navigation.state.params && navigation.state.params.workout.id
      ? true
      : false;

  function SaveWorkoutButton() {
    function generateId() {
      let uuid = Math.floor(Math.random() * 1000);
      return uuid;
    }

    function handleSave() {
      if (navigation.state.params && navigation.state.params.workout) {
        let workout = navigation.state.params.workout;

        if (workout.exercises.length > 0) {
          if (workout.id !== '') {
            navigation.state.params.editWorkout(workout);
          } else {
            workout.id = generateId();
            navigation.state.params.addWorkout(workout);
          }

          navigation.goBack();
        } else {
          alert('Você precisa ter pelo menos 1 exercício');
          return;
        }
      }
    }

    return (
      <SaveArea onPress={handleSave}>
        <SaveImage source={require('../../assets/check-black.png')} />
      </SaveArea>
    );
  }

  return {
    title: isEdit ? 'Editar Treino' : 'Adicionar Treino',
    headerRight: () => <SaveWorkoutButton />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addWorkout: workout =>
      dispatch({ type: 'ADD_WORKOUT', payload: { workout } }),
    editWorkout: workout =>
      dispatch({ type: 'EDIT_WORKOUT', payload: { workout } }),
  };
}

export const EditWorkout = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditWorkoutPage);
