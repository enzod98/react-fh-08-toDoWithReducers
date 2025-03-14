import { memo } from 'react'

export const Small = memo(({ value }) => {
    console.log('Renderizado otv');
  return (
    <small>{ value }</small>
  )
})
