import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowBack'

/**
 * Material Icon: Arrow Back
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:arrow_back Material Icon Docs}
 */
export const ArrowBack = memo(Icon)
