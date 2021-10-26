import React from 'react';

import {
  ExerciseItemContainer,
  ExerciseMuscleArea,
  ExerciseMuscleImage,
  ExerciseInfo,
  ExerciseName,
  ExerciseDetails,
  ExerciseCheck,
  ExerciseDone,
  ExerciseUnDone,
  ExerciseCount,
  ExerciseCountText,
} from './styles';

import { useMuscleImage } from '../Workout/useMuscleImage';

export function ExerciseItem({ data, checkAction, index }) {
  return (
    <ExerciseItemContainer>
      <ExerciseCount>
        <ExerciseCountText>{index + 1}.</ExerciseCountText>
      </ExerciseCount>

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

      <ExerciseCheck onPress={checkAction} underlayColor="transparent">
        {data.done ? (
          <ExerciseDone source={require('../../assets/check-white.png')} />
        ) : (
          <ExerciseUnDone />
        )}
      </ExerciseCheck>
    </ExerciseItemContainer>
  );
}
