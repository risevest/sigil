import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 3.5C7.31 3.5 3.07 5.4 0 8.48L12 20.5L24 8.48C20.93 5.4 16.69 3.5 12 3.5ZM15.32 14.34C14.34 13.8 13.2 13.5 12 13.5C10.8 13.5 9.66 13.8 8.68 14.34L2.92 8.57C5.51 6.58 8.67 5.5 12 5.5C15.33 5.5 18.49 6.58 21.08 8.57L15.32 14.34Z" />
    </Svg>
  )
}

Icon.displayName = 'NetworkWifi1Bar'

/**
 * Material Icon: Network Wifi 1 Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:network_wifi_1_bar Material Icon Docs}
 */
export const NetworkWifi1Bar = memo(Icon)
