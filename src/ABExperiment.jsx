import PropTypes from 'prop-types'

import useExperiment from './hooks/useExperiment'

/**
 * Renders an ABExperiment component. This component takes a Google Optimize
 * experiment id, and provides a variant id to be used to trigger UI changes in
 * it's children. If no variants mapping is present, the component will return
 * the variant id directly from Google Optimize. The variants mapping can be
 * used to return human-readable names for the variants. If an error occurs, the
 * `variant` prop will be `undefined`.
 * @param {object} props - The props passed into the component.
 * @param {function} props.children - A function returning React elements.
 * @param {string} props.experimentId - The unique experiment id provided by Google Optimize.
 * @param {object} props.variants - A mapping of the variant ids provided from Google Optimize
 *  to human-readable names to be returned to the children function.
 */
function ABExperiment ({
  children,
  experimentId,
  variants
}) {
  // If there is no experiment id, return the children without a variant, which will
  // render the default variant
  if (!experimentId) return children({ variant: undefined })

  // Variant hook returns the variant id for a given matching
  // Google Optimize experiment
  const { variant: variantId, loading } = useExperiment(experimentId)

  // Call the children function and provide the variant
  if (loading) return children({ variant: undefined, loading })

  // If a variant is defined in the variants mapping, return the value
  // for the given key, otherwise return the variant id set by Google Optimize.
  const variant = variants[variantId] || variantId

  // Call the children function and provide the variant
  return children({ variant, loading })
}

ABExperiment.defaultProps = {
  experimentId: '',
  children: null,
  variants: ''
}

ABExperiment.propTypes = {
  children: PropTypes.func.isRequired,
  experimentId: PropTypes.string,
  variants: PropTypes.object
}

export default ABExperiment
