import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.5 13.5C3.5 11.05 5.26 9.03 7.58 8.59L6.09 10.09L7.5 11.5L11.5 7.49L7.5 3.5L6.09 4.91L7.67 6.49V6.55C4.2 6.96 1.5 9.92 1.5 13.5C1.5 17.37 4.63 20.5 8.5 20.5H11.5V18.5H8.5C5.74 18.5 3.5 16.26 3.5 13.5Z" />
      <Path d="M13.5 13.5V20.5H22.5V13.5H13.5ZM20.5 18.5H15.5V15.5H20.5V18.5Z" />
      <Path d="M22.5 4.5H13.5V11.5H22.5V4.5Z" />
    </Svg>
  )
}

Icon.displayName = 'MoveUp'

/**
 * Material Icon: Move Up
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:move_up Material Icon Docs}
 */
export const MoveUp = memo(Icon)
