import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.59 18L19 16.59L14.42 12L19 7.41L17.59 6L11.59 12L17.59 18Z" />
      <Path d="M11 18L12.41 16.59L7.83 12L12.41 7.41L11 6L5 12L11 18Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardDoubleArrowLeft'

/**
 * Material Icon: Keyboard Double Arrow Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_double_arrow_left Material Icon Docs}
 */
export const KeyboardDoubleArrowLeft = memo(Icon)
