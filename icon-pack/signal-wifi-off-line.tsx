import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.80815 1.39343L20.4858 19.0711L19.0716 20.4853L15.3889 16.8034L12.0005 21L0.689941 6.99674C1.60407 6.25747 2.59204 5.60589 3.64107 5.05479L1.39394 2.80765L2.80815 1.39343ZM3.57997 7.39183L12.0005 17.817L13.9669 15.3804L5.13163 6.54439C4.59981 6.79756 4.08187 7.0804 3.57997 7.39183ZM12.0005 3.00003C16.2849 3.00003 20.2196 4.49687 23.3104 6.99611L17.9039 13.689L16.4819 12.267L20.4204 7.39135C17.9226 5.84171 15.0278 5.00003 12.0005 5.00003C11.1277 5.00003 10.2659 5.07 9.42141 5.20674L7.72504 3.51088C9.09547 3.17702 10.5273 3.00003 12.0005 3.00003Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalWifiOffLine'

/**
 * Remix Icon: Signal Wifi Off Line
 * @see {@link https://remixicon.com/icon/signal-wifi-off-line Remix Icon Docs}
 */
export const SignalWifiOffLine = memo(Icon)
