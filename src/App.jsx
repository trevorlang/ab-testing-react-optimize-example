import React from 'react'
import ExperimentView from './ExperimentView'
import ABExperiment from './ABExperiment'

import './App.css'

function App () {
  return (
    <div className="App">
      <h1>A/B Testing in Google Optimize with React!</h1>
      <ABExperiment
        experimentId='1234'
        variants={{
          1: 'A',
          2: 'B'
        }}
      >
        {({ variant }) => (
          <ExperimentView experience={variant} />
        )}
      </ABExperiment>
    </div>
  )
}

export default App
