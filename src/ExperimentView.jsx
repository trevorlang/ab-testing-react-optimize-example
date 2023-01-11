import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './ExperimentView.css'

/**
 * Renders the ExperimentView component
 * @param {object} props - The props passed into the component.
 * @param {function} props.experience - The name of the active experience.
 */
function ExperimentView ({
  experience
}) {
  const [hasClicked, setHasClicked] = useState(false)

  const onButtonClick = async () => {
    setHasClicked(true)

    if (window.dataLayer) {
      // Fire the success_button_click_trigger event. A trigger is set up in Google Tag Manager
      // Looking for this trigger, to then fire a GA4 event that serves as the objective in the Optimize
      // experiment.
      await window.dataLayer.push({ event: 'success_button_click_trigger' })
    }
  }

  const conditionalClassNames = []

  if (experience === 'original') conditionalClassNames.push('ExperimentView--Original')
  if (experience === 'variant_b') conditionalClassNames.push('ExperimentView--Variant2')

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
        experience === 'variant_b' && (
          <>Experience: Variant 2</>
        )
      }
      </h2>
        {
          experience && (
            <button
              className="ExperimentView__Button"
              type="button"
              onClick={() => onButtonClick()}
            >
              {
                !hasClicked
                  ? <>Click Me, Please 👈</>
                  : <>✅ Great success!</>
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
