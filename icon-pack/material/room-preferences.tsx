import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.775 15.87L21.915 14.87L20.915 13.14L19.465 13.63C19.145 13.36 18.785 13.15 18.385 13L18.085 11.5H16.085L15.785 12.99C15.385 13.14 15.025 13.35 14.705 13.62L13.255 13.13L12.255 14.86L13.395 15.86C13.315 16.36 13.315 16.62 13.395 17.12L12.255 18.12L13.255 19.85L14.705 19.36C15.025 19.63 15.385 19.84 15.785 19.99L16.085 21.5H18.085L18.385 20.01C18.785 19.86 19.145 19.65 19.465 19.38L20.915 19.87L21.915 18.14L20.775 17.14C20.855 16.63 20.855 16.37 20.775 15.87ZM17.085 18.5C15.985 18.5 15.085 17.6 15.085 16.5C15.085 15.4 15.985 14.5 17.085 14.5C18.185 14.5 19.085 15.4 19.085 16.5C19.085 17.6 18.185 18.5 17.085 18.5ZM18.085 3.5V9.5H16.085V5.5H14.085V11.5H12.085V4.5H6.08496V18.5H11.085V20.5H2.08496V18.5H4.08496V2.5H14.085V3.5H18.085ZM11.085 12.5H9.08496V10.5H11.085V12.5Z" />
    </Svg>
  )
}

Icon.displayName = 'RoomPreferences'

/**
 * Material Icon: Room Preferences
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:room_preferences Material Icon Docs}
 */
export const RoomPreferences = memo(Icon)
