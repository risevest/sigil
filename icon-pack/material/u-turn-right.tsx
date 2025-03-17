import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.5 9V21H6.5V9C6.5 6.79 8.29 5 10.5 5C12.71 5 14.5 6.79 14.5 9V13.17L12.91 11.58L11.5 13L15.5 17L19.5 13L18.09 11.59L16.5 13.17V9C16.5 5.69 13.81 3 10.5 3C7.19 3 4.5 5.69 4.5 9Z" />
    </Svg>
  )
}

Icon.displayName = 'UTurnRight'

/**
 * Material Icon: U Turn Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:u_turn_right Material Icon Docs}
 */
export const UTurnRight = memo(Icon)
