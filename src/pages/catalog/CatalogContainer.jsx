import React from 'react';
import { connect } from 'react-redux';
import { addBodyPartCreator, addExercisesCreator, updateBodyPartTextCreator, updateNewExercisesTextCreator } from '../../Redux/Catalog-reduser';
import Catalog from './Catalog';


let mapStateToProps = (state) => {
    return {
        catalog: state.catalog
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addExercises: () => {
            dispatch(addExercisesCreator())
        },
        updateNewExercisesText: (text) => {
            dispatch(updateNewExercisesTextCreator(text))
        },
        addBodyPart: () => {
            dispatch(addBodyPartCreator())
        },
        updateBodyPartText: (text) => {
            dispatch(updateBodyPartTextCreator(text))
        }
    }
}
const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);
export default CatalogContainer;