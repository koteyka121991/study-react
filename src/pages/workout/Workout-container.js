import { connect } from 'react-redux';
import { dataWorkout } from '../../Redux/workout-reduser';
import Workout from './Workout'

let mapStateToProps = (state) => {
    return {
        workoutPage: state.workoutPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        dataWorkout: () => {
            dispatch(dataWorkout())
        }
      
    }
}
const WorkoutContainer = connect(mapStateToProps, mapDispatchToProps)(Workout);
export default WorkoutContainer;