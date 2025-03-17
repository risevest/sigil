import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.5 7V11H6.33L9.91 7.41L8.5 6L2.5 12L8.5 18L9.91 16.59L6.33 13H21.5V7H19.5Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardReturn'

/**
 * Material Icon: Keyboard Return
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_return Material Icon Docs}
 */
export const KeyboardReturn = memo(Icon)
