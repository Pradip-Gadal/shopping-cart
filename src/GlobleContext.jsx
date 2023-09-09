import React, { Children, createContext, useReducer } from 'react';

const GlobleProvider = createContext()

const GlobleContext = ({childern}) => {

  const [state, dispatch] = useReducer(reducer, initialStage)
  
  
  return (
    <GlobleProvider.Provider>
      {Children}
    </GlobleProvider.Provider>
  )
}

export default GlobleContext
