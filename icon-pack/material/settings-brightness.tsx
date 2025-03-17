import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19.01H3V4.99H21V19.01ZM8 16H10.5L12 17.5L13.5 16H16V13.5L17.5 12L16 10.5V8H13.5L12 6.5L10.5 8H8V10.5L6.5 12L8 13.5V16ZM12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15V9Z" />
    </Svg>
  )
}

Icon.displayName = 'SettingsBrightness'

/**
 * Material Icon: Settings Brightness
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:settings_brightness Material Icon Docs}
 */
export const SettingsBrightness = memo(Icon)
