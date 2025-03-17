import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 7V4C18 2.9 17.1 2 16 2H8C6.9 2 6 2.9 6 4V7H5V13L8 19V22H16V19L19 13V7H18ZM8 4H16V7H13.99V5H12.99V7H11V5H10V7H8V4ZM17 12.53L14 18.53V20H10V18.53L7 12.53V9H17V12.53Z" />
    </Svg>
  )
}

Icon.displayName = 'SettingsInputHdmi'

/**
 * Material Icon: Settings Input Hdmi
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:settings_input_hdmi Material Icon Docs}
 */
export const SettingsInputHdmi = memo(Icon)
