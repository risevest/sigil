import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3H3V5H21V3Z" />
      <Path d="M21 19H3V21H21V19Z" />
    </Svg>
  )
}

Icon.displayName = 'DensityLarge'

/**
 * Material Icon: Density Large
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:density_large Material Icon Docs}
 */
export const DensityLarge = memo(Icon)
