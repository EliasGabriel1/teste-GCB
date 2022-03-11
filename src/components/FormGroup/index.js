import React from 'react';
import FormuGroup from "./styled";

export default function FormGroup(props) {
    return (
      <>
        <FormuGroup>
            <label for={props.id}>{props.value}: </label>
            <input type={props.type} id={props.id} placeholder={props.placeholder} onKeyPress={props.funcao} required />
        </FormuGroup>
      </>
    );
  }