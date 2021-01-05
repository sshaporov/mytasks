import React from 'react'
import {DEV_VERSION} from "../../../config";

export type CardHeaderPropsType = {
  cardName: string
}
export const CardHeader: React.FC<CardHeaderPropsType> = React.memo((
  {
    cardName
  }
) => {
  DEV_VERSION && console.log('Card Header');

  return (
    <div>Header: {cardName}</div>
  )
})