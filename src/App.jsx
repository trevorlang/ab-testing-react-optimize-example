import React from 'react'
import { BounceLoader } from 'react-spinners'

import ExperimentView from './ExperimentView'
import ABExperiment from './ABExperiment'

import './App.css'

/**
 * Renders the App component
 */
function App () {
  return (
    <div className="App">
      <h1>A/B Testing in Google Optimize with React 👌</h1>
      <ABExperiment
        experimentId={import.meta.env.VITE_OPTIMIZE_EXPERIMENT_ID}
        variants={{
          0: 'original',
          1: 'variant_2'
        }}
      >
        {({ variant, loading }) => (
          loading
            ? <BounceLoader color="#FFFFFF" speedMultiplier={1.5} />
            : <ExperimentView experience={variant} />
        )}
      </ABExperiment>
    </div>
  )
}

export default App
