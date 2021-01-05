import React from 'react'
import {DEV_VERSION} from '../../../config';

export const ProgressBar = React.memo(() => {
  DEV_VERSION && console.log('ProgressBar');

  return (
    <div>
      --------- progress bar
    </div>
  )
})