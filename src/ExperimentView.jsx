import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import './ExperimentView.css'

function ExperimentView ({
  experience
}) {
  const [hasClicked, setHasClicked] = useState(false)

  const onButtonClick = useCallback(() => {
    if (!hasClicked) setHasClicked(true)

    if (window.dataLayer) {
      window.dataLayer.push({ event: 'success_button_click' })
    }
  })

  const conditionalClassNames = []

  if (experience === 'original') conditionalClassNames.push('ExperimentView__Original')
  if (experience === 'variant_2') conditionalClassNames.push('ExperimentView__Variant2')

  return (
    <section className="ExperimentView">
      <h2 className="ExperimentView__Experience">
      {
        !experience && (
          <>No experience set</>
        )
      }
      {
        experience === 'original' && (
          <>Experience: Original</>
        )
      }
      {
        experience === 'variant_2' && (
          <>Experience: Variant 2</>
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
              <>Great success!</>
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
  experience: PropTypes.string
}
