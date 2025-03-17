import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 14.7949L6.41 16.2049L12 10.6249L17.59 16.2049L19 14.7949L12 7.79492L5 14.7949Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardControlKey'

/**
 * Material Icon: Keyboard Control Key
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_control_key Material Icon Docs}
 */
export const KeyboardControlKey = memo(Icon)
