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

export function Workout({
  data,
  handleAddAction,
  handleEditAction,
  handleDelAction,
  handleGoAction,
}) {
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

  function handleEditWorkout() {
    handleEditAction();
  }

  function handleDelWorkout() {
    handleDelAction();
  }

  function handleGoWorkout() {
    handleGoAction();
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
        {handleAddAction && (
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
        )}

        {handleEditAction && (
          <WorkoutButton
            onPress={() => handleEditWorkout()}
            underlayColor="transparent">
            <WorkoutButtonImage
              source={require('../../assets/edit-black.png')}
            />
          </WorkoutButton>
        )}

        {handleDelAction && (
          <WorkoutButton
            onPress={() => handleDelWorkout()}
            underlayColor="transparent">
            <WorkoutButtonImage
              source={require('../../assets/trash-black.png')}
            />
          </WorkoutButton>
        )}

        {handleGoAction && (
          <WorkoutButton
            onPress={() => handleGoWorkout()}
            underlayColor="transparent">
            <WorkoutButtonImage
              source={require('../../assets/play-black.png')}
            />
          </WorkoutButton>
        )}
      </WorkoutActions>
    </WorkoutContainer>
  );
}
