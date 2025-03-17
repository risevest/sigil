import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 8.61492L16.59 13.2049L18 11.7949L12 5.79492L6 11.7949L7.41 13.2049L12 8.61492ZM6 18.2049H18V16.2049H6V18.2049Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardCapslock'

/**
 * Material Icon: Keyboard Capslock
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_capslock Material Icon Docs}
 */
export const KeyboardCapslock = memo(Icon)
