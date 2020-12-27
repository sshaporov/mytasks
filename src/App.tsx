import React from 'react'
import {Button} from './common/button/Button'
import {Checkbox} from "./common/checkbox/Checkbox";

function App() {
  return (
    <div>
      <Button label={'Click'} size={'S'}/>
      <Button label={'Click'} size={'M'}/>
      <Button label={'Click'} size={'L'}/>

      <div><Checkbox label={'checked'} checked/></div>
      <div><Checkbox label={'disabled'} disabled/></div>
      <div><Checkbox label={'random'}/></div>
      <div><Checkbox label={'checked disabled'} checked disabled/></div>
    </div>
  );
}

export default App;
