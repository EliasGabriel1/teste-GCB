import React from 'react';
import {FormuGroup, GroupInput, Input, Button} from "./styled";
import Svg from ".././SvgSearch"


export default function FormGroup(props) {
    return (
      <>
        <FormuGroup>
              {props.id && props.value ? <label for={props.id}>{props.value}</label>:""}
            <GroupInput>
              <Input autocomplete={props.autoComoplete} type={props.type} id={props.id} placeholder={props.placeholder} onKeyPress={props.funcao} required />
              {props.button ? <Button id={props.idbutton}><Svg/></Button>:""}
            </GroupInput>
        </FormuGroup>
      </>
    );
  }