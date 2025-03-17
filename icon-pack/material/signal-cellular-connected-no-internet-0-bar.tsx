import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 18H22V10H20V18ZM20 22H22V20H20V22ZM18 20V22H2L22 2V8H20V6.83L6.83 20H18Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalCellularConnectedNoInternet0Bar'

/**
 * Material Icon: Signal Cellular Connected No Internet 0 Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signal_cellular_connected_no_internet_0_bar Material Icon Docs}
 */
export const SignalCellularConnectedNoInternet0Bar = memo(Icon)
