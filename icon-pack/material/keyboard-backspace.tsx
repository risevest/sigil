import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardBackspace'

/**
 * Material Icon: Keyboard Backspace
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_backspace Material Icon Docs}
 */
export const KeyboardBackspace = memo(Icon)
