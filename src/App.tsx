import React from 'react'
import {Button} from './common/button/Button'
import {Checkbox} from './common/checkbox/Checkbox'
import {Input} from './common/input/Input'

function App() {

  return (
    <div>
      <Button label={'Click'} buttonSize={'S'}/>
      <Button label={'Click'} buttonSize={'M'}/>
      <Button label={'Click'} buttonSize={'L'}/>
      <Button label={'Click'} buttonSize={'L'} disabled/>

      <div><Checkbox label={'checked'} checked/></div>
      <div><Checkbox label={'disabled'} disabled/></div>
      <div><Checkbox label={'M'}/></div>
      <div><Checkbox label={'checked disabled'} checked disabled/></div>

      <div><Checkbox label={'S'} checkboxSize={'S'}/></div>
      <div><Checkbox label={'L'} checkboxSize={'L'}/></div>

      <div><Input fieldName={'Field Name'} placeholder={"Enter your name.."}/></div>
      <div><Input placeholder={"Enter your name.."}/></div>
        <hr/>
      <div><Input fieldName={'Field Name'} placeholder={"Enter your name.."} inputSize={'S'}/></div>
      <div><Input fieldName={'Field Name'} placeholder={"Enter your name.."} inputSize={'M'}/></div>
      <div><Input fieldName={'Field Name'} placeholder={"Enter your name.."} inputSize={'L'}/></div>

    </div>
  );
}

export default App;
