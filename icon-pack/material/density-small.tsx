import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 2H3V4H21V2Z" />
      <Path d="M21 20H3V22H21V20Z" />
      <Path d="M21 14H3V16H21V14Z" />
      <Path d="M21 8H3V10H21V8Z" />
    </Svg>
  )
}

Icon.displayName = 'DensitySmall'

/**
 * Material Icon: Density Small
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:density_small Material Icon Docs}
 */
export const DensitySmall = memo(Icon)
