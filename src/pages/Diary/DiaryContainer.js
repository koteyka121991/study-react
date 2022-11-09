import React from 'react';
import { addApproachesCreator, addSetCreator, addWeightCreator, updateNewApproachesTextCreator, updateNewSetTextCreator, updateNewWeightTextCreator } from '../../Redux/Diary-reduser';
import { connect } from 'react-redux';
import Diary from './Diary'
let mapStateToProps =(state) => {
    return {
        DiaryContainer: state.diary
    }
}
let mapDispatchToProps=(dispatch) => {
    return {
        addWeight: () => {
            dispatch(addWeightCreator())
        },
        updateNewWeightText: (text) => {
            dispatch(updateNewWeightTextCreator(text))
        },
        addSet: () => {
            dispatch(addSetCreator())
        },
        updateNewSetText: (text) => {
            dispatch(updateNewSetTextCreator(text))
        },
        addApproaches: () => {
            dispatch(addApproachesCreator())
        },
        updateNewApproachesText: (text) => {
            dispatch(updateNewApproachesTextCreator(text))
        }
    }

}
const DiaryContainer = connect(mapStateToProps, mapDispatchToProps)(Diary);

export default DiaryContainer;