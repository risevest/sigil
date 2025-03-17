import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 18H22V10H20V18ZM20 22H22V20H20V22ZM2 22H18V8H22V2L2 22Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalCellularConnectedNoInternet4Bar'

/**
 * Material Icon: Signal Cellular Connected No Internet 4 Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signal_cellular_connected_no_internet_4_bar Material Icon Docs}
 */
export const SignalCellularConnectedNoInternet4Bar = memo(Icon)
