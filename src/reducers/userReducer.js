/* eslint-disable no-unreachable */
const initialState = {
  name: '',
  level: '', // beginner, intermediate, advanced
  workoutDays: [], // 0-6
  myWorkouts: [],
  lastWorkout: '', // ID
  dailyProgress: ['2021-09-27', '2021-09-28'],
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload.name };
      break;

    case 'SET_WORKOUTDAYS':
      return { ...state, workoutDays: action.payload.workoutDays };
      break;

    case 'SET_LEVEL':
      return { ...state, level: action.payload.level };
      break;
  }

  return state;
}
