import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 4V6.67L12 7.67L11 6.67V4H13ZM20 11V13H17.33L16.33 12L17.33 11H20ZM6.67 11L7.67 12L6.67 13H4V11H6.67ZM12 16.33L13 17.33V20H11V17.33L12 16.33ZM15 2H9V7.5L12 10.5L15 7.5V2ZM22 9H16.5L13.5 12L16.5 15H22V9ZM7.5 9H2V15H7.5L10.5 12L7.5 9ZM12 13.5L9 16.5V22H15V16.5L12 13.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Gamepad'

/**
 * Material Icon: Gamepad
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:gamepad Material Icon Docs}
 */
export const Gamepad = memo(Icon)
