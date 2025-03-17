import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.5 12V6C10.5 4.34 9.16 3 7.5 3C5.84 3 4.5 4.34 4.5 6V12C3.29 12.91 2.5 14.37 2.5 16C2.5 17.12 2.88 18.14 3.5 18.97V19H3.52C4.43 20.21 5.87 21 7.5 21C9.13 21 10.56 20.21 11.48 19H11.5V18.97C12.12 18.14 12.5 17.12 12.5 16C12.5 14.37 11.71 12.91 10.5 12ZM4.5 16C4.5 15.06 4.95 14.16 5.7 13.6L6.5 13V6C6.5 5.45 6.95 5 7.5 5C8.05 5 8.5 5.45 8.5 6V13L9.3 13.6C10.05 14.17 10.5 15.06 10.5 16H4.5ZM18.12 4H16.51L13.13 13H14.69L15.5 10.7H19.13L19.93 13H21.5L18.12 4ZM15.97 9.39L17.28 5.67H17.36L18.67 9.39H15.97Z" />
    </Svg>
  )
}

Icon.displayName = 'ThermostatAuto'

/**
 * Material Icon: Thermostat Auto
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:thermostat_auto Material Icon Docs}
 */
export const ThermostatAuto = memo(Icon)
