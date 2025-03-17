import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 14C2 15.1 2.9 16 4 16H20C21.1 16 22 15.1 22 14V4C22 2.9 21.1 2 20 2ZM20 14H4V4H20V14ZM11 5H13V7H11V5ZM11 8H13V10H11V8ZM8 5H10V7H8V5ZM8 8H10V10H8V8ZM5 8H7V10H5V8ZM5 5H7V7H5V5ZM8 11H16V13H8V11ZM14 8H16V10H14V8ZM14 5H16V7H14V5ZM17 8H19V10H17V8ZM17 5H19V7H17V5ZM12 22L16 18H8L12 22Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardHide'

/**
 * Material Icon: Keyboard Hide
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_hide Material Icon Docs}
 */
export const KeyboardHide = memo(Icon)
