import React from 'react';

import { addBodyPartCreator, addExercisesCreator, updateBodyPartTextCreator, updateNewExercisesTextCreator } from '../../Redux/Catalog-reduser';
import Catalog from './Catalog';

const CatalogContainer = (props) => {  
    let state = props.store.getState().catalog;  
    let onSendTextExercises = () => {
        props.store.dispatch(addExercisesCreator());
    }
    let onNewtextChage = (text) => {       
        props.store.dispatch(updateNewExercisesTextCreator(text));
    }
    let onSendTextbodyPart = () => {
        props.store.dispatch(addBodyPartCreator());
    }
    let onNewTextChageBodyPart = (text) => {      
        props.store.dispatch(updateBodyPartTextCreator(text));
    }
    return (
      <Catalog updateNewExercisesText={onNewtextChage} addExercises={onSendTextExercises} 
      addBodyPart={onSendTextbodyPart} updateBodyPartText={onNewTextChageBodyPart}
      catalog={state}/>
    )

}
export default CatalogContainer;