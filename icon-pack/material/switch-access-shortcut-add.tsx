import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.56 8.94L3.5 8L5.56 7.06L6.5 5L7.44 7.06L9.5 8L7.44 8.94L6.5 11L5.56 8.94ZM6.5 21L7.44 18.94L9.5 18L7.44 17.06L6.5 15L5.56 17.06L3.5 18L5.56 18.94L6.5 21ZM2.87 12.37L1.5 13L2.87 13.63L3.5 15L4.13 13.63L5.5 13L4.13 12.37L3.5 11L2.87 12.37ZM10.5 12C10.5 8.91 11.88 6.06 13.94 4H10.5V2H17.5V9H15.5V5.28C13.7 7.02 12.5 9.48 12.5 12C12.5 15.32 14.6 18.36 17.5 19.82V22C13.41 20.41 10.5 16.35 10.5 12ZM22.5 14H20.5V12H18.5V14H16.5V16H18.5V18H20.5V16H22.5V14Z" />
    </Svg>
  )
}

Icon.displayName = 'SwitchAccessShortcutAdd'

/**
 * Material Icon: Switch Access Shortcut Add
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:switch_access_shortcut_add Material Icon Docs}
 */
export const SwitchAccessShortcutAdd = memo(Icon)
