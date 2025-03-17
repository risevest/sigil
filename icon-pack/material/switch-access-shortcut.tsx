import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.06 8.94L6 8L8.06 7.06L9 5L9.94 7.06L12 8L9.94 8.94L9 11L8.06 8.94ZM9 21L9.94 18.94L12 18L9.94 17.06L9 15L8.06 17.06L6 18L8.06 18.94L9 21ZM5.37 12.37L4 13L5.37 13.63L6 15L6.63 13.63L8 13L6.63 12.37L6 11L5.37 12.37ZM13 12C13 8.91 14.38 6.06 16.44 4H13V2H20V9H18V5.28C16.2 7.02 15 9.48 15 12C15 15.32 17.1 18.36 20 19.82V22C15.91 20.41 13 16.35 13 12Z" />
    </Svg>
  )
}

Icon.displayName = 'SwitchAccessShortcut'

/**
 * Material Icon: Switch Access Shortcut
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:switch_access_shortcut Material Icon Docs}
 */
export const SwitchAccessShortcut = memo(Icon)
