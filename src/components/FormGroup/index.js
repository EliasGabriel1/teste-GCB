import React from 'react';
import {FormuGroup, GroupInput, Input, Button} from "./styled";
import Svg from ".././SvgSearch"


export default function FormGroup(props) {
  function validation(props){
    console.log(props);
  };  
  
  return (
      <>
        <FormuGroup>
              {props.id && props.value ? <label for={props.id}>{props.value}</label>:""}
            <GroupInput>
              <Input autocomplete={props.autoComoplete} type={props.type} id={props.id} placeholder={props.placeholder} onKeyPress={validation(props.id)} required />
              {props.button ? <Button id={props.idbutton}>    {!props.contentbutton ? <Svg/> : props.contentbutton} </Button> : "" }
            </GroupInput>
        </FormuGroup>
      </>
    );
  }