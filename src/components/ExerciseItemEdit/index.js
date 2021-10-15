import React from 'react';

import {
  ExerciseItemEditContainer,
  ExerciseMuscleArea,
  ExerciseMuscleImage,
  ExerciseInfo,
  ExerciseName,
  ExerciseDetails,
  ExerciseSwipe,
  ExerciseSwipeIcon,
} from './styles';

import { SwipeRow } from 'react-native-swipe-list-view';

import { useMuscleImage } from '../Workout/useMuscleImage';

export function ExerciseItemEdit({ data, handleDelAction, handleEditAction }) {
  return (
    <SwipeRow leftOpenValue={50} disableLeftSwipe={true}>
      <ExerciseSwipe onPress={handleDelAction} underlayColor="#ff0000">
        <ExerciseSwipeIcon source={require('../../assets/trash-white.png')} />
      </ExerciseSwipe>

      <ExerciseItemEditContainer
        onPress={handleEditAction}
        underlayColor="#fff">
        <>
          <ExerciseMuscleArea>
            <ExerciseMuscleImage source={useMuscleImage(data.muscle)} />
          </ExerciseMuscleArea>

          <ExerciseInfo>
            <ExerciseName>{data.name}</ExerciseName>
            <ExerciseDetails>
              {`${data.sets} Séries - ${data.reps} rep ${
                data.load ? `- ${data.load} kg` : ''
              }`}
            </ExerciseDetails>
          </ExerciseInfo>
        </>
      </ExerciseItemEditContainer>
    </SwipeRow>
  );
}
