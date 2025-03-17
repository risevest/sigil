import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 3.5C7.31 3.5 3.07 5.4 0 8.48L12 20.5L24 8.48C20.93 5.4 16.69 3.5 12 3.5ZM16.78 12.88C15.4 12 13.76 11.5 12 11.5C10.24 11.5 8.6 12 7.22 12.88L2.92 8.58C5.51 6.58 8.67 5.5 12 5.5C15.33 5.5 18.49 6.58 21.08 8.57L16.78 12.88Z" />
    </Svg>
  )
}

Icon.displayName = 'NetworkWifi2Bar'

/**
 * Material Icon: Network Wifi 2 Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:network_wifi_2_bar Material Icon Docs}
 */
export const NetworkWifi2Bar = memo(Icon)
