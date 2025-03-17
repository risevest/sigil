import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41L12 12.41L18 6.41Z" />
      <Path d="M18 13L16.59 11.59L12 16.17L7.41 11.59L6 13L12 19L18 13Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardDoubleArrowDown'

/**
 * Material Icon: Keyboard Double Arrow Down
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_double_arrow_down Material Icon Docs}
 */
export const KeyboardDoubleArrowDown = memo(Icon)
