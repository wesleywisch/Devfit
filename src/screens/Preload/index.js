import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

function PreloadPage(props) {
  if (!props.name) {
    // mandar para StarterStack
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'StarterStack' })],
      }),
    );
  } else {
    // mandar para AppTab
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'AppTab' })],
      }),
    );
  }

  return null;
}

function mapStateToProps(state) {
  return {
    name: state.userReducer.name,
  };
}

export const Preload = connect(mapStateToProps)(PreloadPage);
