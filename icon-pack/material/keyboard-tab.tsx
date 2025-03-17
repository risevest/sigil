import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.09 7.41L15.67 11H1.5V13H15.67L12.08 16.59L13.5 18L19.5 12L13.5 6L12.09 7.41ZM20.5 6V18H22.5V6H20.5Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardTab'

/**
 * Material Icon: Keyboard Tab
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_tab Material Icon Docs}
 */
export const KeyboardTab = memo(Icon)
