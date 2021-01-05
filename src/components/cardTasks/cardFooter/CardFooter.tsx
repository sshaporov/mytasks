import React from 'react'
import {DEV_VERSION} from "../../../config";

export type CardFooterPropsType = {

}
export const CardFooter: React.FC<CardFooterPropsType> = React.memo(() => {
  DEV_VERSION && console.log('Card Footer');

  return (
    <div>
      <div>Task Footer</div>
    </div>
  )
})