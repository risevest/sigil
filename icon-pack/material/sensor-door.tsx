import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 4V20H6V4H18ZM18 2H6C4.9 2 4 2.9 4 4V22H20V4C20 2.9 19.1 2 18 2ZM15.5 10.5C14.67 10.5 14 11.17 14 12C14 12.83 14.67 13.5 15.5 13.5C16.33 13.5 17 12.83 17 12C17 11.17 16.33 10.5 15.5 10.5Z" />
    </Svg>
  )
}

Icon.displayName = 'SensorDoor'

/**
 * Material Icon: Sensor Door
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sensor_door Material Icon Docs}
 */
export const SensorDoor = memo(Icon)
