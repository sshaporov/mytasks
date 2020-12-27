import React from 'react'
import {Button} from './common/button/Button'

function App() {
  return (
    <div>
        <Button
            label={'Click'}
            size={'S'}
        />
      <Button
        label={'Click'}
        size={'M'}
      />
      <Button
        label={'Click'}
        size={'L'}
      />
    </div>
  );
}

export default App;
