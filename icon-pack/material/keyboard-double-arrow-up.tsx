import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 17.59L7.41 19L12 14.42L16.59 19L18 17.59L12 11.59L6 17.59Z" />
      <Path d="M6 11L7.41 12.41L12 7.83L16.59 12.41L18 11L12 5L6 11Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardDoubleArrowUp'

/**
 * Material Icon: Keyboard Double Arrow Up
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_double_arrow_up Material Icon Docs}
 */
export const KeyboardDoubleArrowUp = memo(Icon)
