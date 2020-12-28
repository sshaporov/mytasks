import React from 'react'
import {Button} from './common/button/Button'
import {Checkbox} from './common/checkbox/Checkbox'
import { InputField} from './common/input/InputField'

function App() {

  return (
    <div>
      <Button label={'Click'} buttonSize={'S'}/>
      <Button label={'Click'} buttonSize={'M'}/>
      <Button label={'Click'} buttonSize={'L'}/>

      <div><Checkbox label={'checked'} checked/></div>
      <div><Checkbox label={'disabled'} disabled/></div>
      <div><Checkbox label={'M'}/></div>
      <div><Checkbox label={'checked disabled'} checked disabled/></div>

      <div><Checkbox label={'S'} checkboxSize={'S'}/></div>
      <div><Checkbox label={'L'} checkboxSize={'L'}/></div>

      <div><InputField placeholder={'Asa SDsdasdasda'}/></div>

    </div>
  );
}

export default App;
