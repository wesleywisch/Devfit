/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import {
  WorkoutContainer,
  WorkoutInfo,
  WorkoutTitle,
  MuscleScroll,
  WorkoutActions,
  WorkoutButton,
  WorkoutButtonImage,
  MuscleGroup,
  MuscleImage,
} from './styles';

import { useMuscleImage } from './useMuscleImage';

export function Workout({ data, handleAddAction }) {
  const [included, setIncluded] = useState(false);

  let muscleGroups = [];

  for (let i in data.exercises) {
    if (!muscleGroups.includes(data.exercises[i].muscle)) {
      muscleGroups.push(data.exercises[i].muscle);
    }
  }

  function handleAddWorkout() {
    setIncluded(!included);
    handleAddAction();
  }

  return (
    <WorkoutContainer>
      <WorkoutInfo>
        <WorkoutTitle>{data.name}</WorkoutTitle>
        <MuscleScroll horizontal={true} showsHorizontalScrollIndicator={true}>
          {muscleGroups.map((item, key) => (
            <MuscleGroup key={key}>
              <MuscleImage source={useMuscleImage(item)} />
            </MuscleGroup>
          ))}
        </MuscleScroll>
      </WorkoutInfo>

      <WorkoutActions>
        <WorkoutButton
          onPress={() => handleAddWorkout()}
          underlayColor="transparent">
          <WorkoutButtonImage
            source={
              included
                ? require('../../assets/check-black.png')
                : require('../../assets/add.png')
            }
          />
        </WorkoutButton>
      </WorkoutActions>
    </WorkoutContainer>
  );
}
