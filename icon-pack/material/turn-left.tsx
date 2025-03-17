import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.83 10L10.42 11.59L9 13L5 9L9 5L10.41 6.41L8.83 8H17C18.1 8 19 8.9 19 10V19H17V10H8.83Z" />
    </Svg>
  )
}

Icon.displayName = 'TurnLeft'

/**
 * Material Icon: Turn Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:turn_left Material Icon Docs}
 */
export const TurnLeft = memo(Icon)
