import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import './ExperimentView.css'

function ExperimentView ({
  experience
}) {
  const [hasClicked, setHasClicked] = useState(false)
  const onButtonClick = useCallback(() => {
    if (!hasClicked) setHasClicked(true)
  })
  return (
    <section className="ExperimentView">
      <h2 className="ExperimentView__Experience">
      {
        !experience
          ? (
            <>No experience set</>
            )
          : (
              experience
            )
      }
      </h2>
      <button
        className="ExperimentView__Button"
        type="button"
        disabled={hasClicked}
        onClick={onButtonClick}
      >
        {
          !hasClicked
            ? (
              <>Click Me</>
              )
            : (
              <>Thanks :)</>
              )
        }
      </button>
    </section>
  )
}

export default ExperimentView

ExperimentView.defaultProps = {
  experience: null
}

ExperimentView.propTypes = {
  experience: PropTypes.string.isRequired
}
