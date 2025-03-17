import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.5 4C17.89 4.7 14.83 5 12 5C9.17 5 6.11 4.7 3.5 4L3 6C4.86 6.5 7 6.83 9 7V19H11V13H13V19H15V7C17 6.83 19.14 6.5 21 6L20.5 4ZM12 4C13.1 4 14 3.1 14 2C14 0.9 13.1 0 12 0C10.9 0 10 0.9 10 2C10 3.1 10.9 4 12 4ZM7 24H9V22H7V24ZM11 24H13V22H11V24ZM15 24H17V22H15V24Z" />
    </Svg>
  )
}

Icon.displayName = 'SettingsAccessibility'

/**
 * Material Icon: Settings Accessibility
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:settings_accessibility Material Icon Docs}
 */
export const SettingsAccessibility = memo(Icon)
