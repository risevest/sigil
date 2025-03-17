import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.645 24H13.645V22H11.645V24ZM7.64502 24H9.64502V22H7.64502V24ZM15.645 24H17.645V22H15.645V24ZM18.355 5.71L12.645 0H11.645V7.59L7.05502 3L5.64502 4.41L11.235 10L5.64502 15.59L7.05502 17L11.645 12.41V20H12.645L18.355 14.29L14.055 10L18.355 5.71ZM13.645 3.83L15.525 5.71L13.645 7.59V3.83ZM15.525 14.29L13.645 16.17V12.41L15.525 14.29Z" />
    </Svg>
  )
}

Icon.displayName = 'SettingsBluetooth'

/**
 * Material Icon: Settings Bluetooth
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:settings_bluetooth Material Icon Docs}
 */
export const SettingsBluetooth = memo(Icon)
