import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12ZM4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12ZM16 12L12 16L10.59 14.59L12.17 13H8V11H12.17L10.58 9.41L12 8L16 12Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowCircleRight'

/**
 * Material Icon: Arrow Circle Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:arrow_circle_right Material Icon Docs}
 */
export const ArrowCircleRight = memo(Icon)
