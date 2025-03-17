import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.5 9V21H17.5V9C17.5 6.79 15.71 5 13.5 5C11.29 5 9.5 6.79 9.5 9V13.17L11.09 11.58L12.5 13L8.5 17L4.5 13L5.91 11.59L7.5 13.17V9C7.5 5.69 10.19 3 13.5 3C16.81 3 19.5 5.69 19.5 9Z" />
    </Svg>
  )
}

Icon.displayName = 'UTurnLeft'

/**
 * Material Icon: U Turn Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:u_turn_left Material Icon Docs}
 */
export const UTurnLeft = memo(Icon)
