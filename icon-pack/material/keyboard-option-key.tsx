import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 5H15V7H21V5Z" />
      <Path d="M9 5H3V7H7.85L14.77 19H21V17H15.93L9 5Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardOptionKey'

/**
 * Material Icon: Keyboard Option Key
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_option_key Material Icon Docs}
 */
export const KeyboardOptionKey = memo(Icon)
