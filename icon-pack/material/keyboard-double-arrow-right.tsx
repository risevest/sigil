import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18L12.41 12L6.41 6Z" />
      <Path d="M13 6L11.59 7.41L16.17 12L11.59 16.59L13 18L19 12L13 6Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardDoubleArrowRight'

/**
 * Material Icon: Keyboard Double Arrow Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_double_arrow_right Material Icon Docs}
 */
export const KeyboardDoubleArrowRight = memo(Icon)
