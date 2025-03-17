import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.5 11.5V13.5H12.5V11.5H4.5ZM19.5 18.5H17.5V7.88L14.5 8.9V7.2L19.2 5.5H19.5V18.5Z" />
    </Svg>
  )
}

Icon.displayName = 'ExposureNeg1'

/**
 * Material Icon: Exposure Neg 1
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:exposure_neg_1 Material Icon Docs}
 */
export const ExposureNeg1 = memo(Icon)
