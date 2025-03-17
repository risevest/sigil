import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3H3V5H21V3Z" />
      <Path d="M21 19H3V21H21V19Z" />
      <Path d="M21 11H3V13H21V11Z" />
    </Svg>
  )
}

Icon.displayName = 'DensityMedium'

/**
 * Material Icon: Density Medium
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:density_medium Material Icon Docs}
 */
export const DensityMedium = memo(Icon)
