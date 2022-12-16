import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './ExperimentView.css'

function ExperimentView ({
  experience
}) {
  const [hasClicked, setHasClicked] = useState(false)

  const onButtonClick = () => {
    if (!hasClicked) setHasClicked(true)

    if (window.dataLayer) {
      window.dataLayer.push({ event: 'success_button_click' })
    }
  }

  const conditionalClassNames = []

  if (experience === 'original') conditionalClassNames.push('ExperimentView--Original')
  if (experience === 'variant_2') conditionalClassNames.push('ExperimentView--Variant2')

  return (
    <section className={`ExperimentView ${conditionalClassNames.join(' ')}`}>
      <h2 className="ExperimentView__Experience">
      {
        !experience && (
          <>No experience set 😦</>
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
        {
          experience && (
            <button
              className="ExperimentView__Button"
              type="button"
              disabled={hasClicked}
              onClick={() => onButtonClick()}
            >
              {
                !hasClicked
                  ? (
                      <>Click Me, Please 👈</>
                    )
                  : (
                      <>✅ Great success!</>
                    )
              }
            </button>
          )
      }
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
