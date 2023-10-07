import React from 'react'
import { useRouteError } from 'react-router-dom'
export const SinglePage = () => {
    const error  = useRouteError();
  return (
    <h2>{error.message}</h2>
  )
}
