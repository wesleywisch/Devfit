const initialState = {
  name: '',
  level: '', // beginner, intermediate, advanced
  workoutDays: [], // 1-0
  myWorkouts: [],
  lastWorkout: '', // ID
  dailyProgress: ['2021-09-27', '2021-09-28'],
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload.name };
      break;
  }

  return state;
}
