import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 4V11H14V10H10V11H6V4H18ZM6 20V13H18V20H6Z" />
    </Svg>
  )
}

Icon.displayName = 'SensorWindow'

/**
 * Material Icon: Sensor Window
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sensor_window Material Icon Docs}
 */
export const SensorWindow = memo(Icon)
