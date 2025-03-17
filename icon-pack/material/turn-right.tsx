import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.17 10L13.58 11.59L15 13L19 9L15 5L13.59 6.41L15.17 8H7C5.9 8 5 8.9 5 10V19H7V10H15.17Z" />
    </Svg>
  )
}

Icon.displayName = 'TurnRight'

/**
 * Material Icon: Turn Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:turn_right Material Icon Docs}
 */
export const TurnRight = memo(Icon)
