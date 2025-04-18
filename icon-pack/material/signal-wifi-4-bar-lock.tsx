import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.98 10.5L24 8.48C20.93 5.4 16.69 3.5 12 3.5C7.31 3.5 3.07 5.4 0 8.48L12 20.5L15.05 17.45V14.5C15.05 14.05 15.14 13.62 15.28 13.21C15.82 11.64 17.29 10.5 19.05 10.5H21.98Z" />
      <Path d="M22 15.5V14.5C22 13.4 21.1 12.5 20 12.5C18.9 12.5 18 13.4 18 14.5V15.5C17.45 15.5 17 15.95 17 16.5V19.5C17 20.05 17.45 20.5 18 20.5H22C22.55 20.5 23 20.05 23 19.5V16.5C23 15.95 22.55 15.5 22 15.5ZM21 15.5H19V14.5C19 13.95 19.45 13.5 20 13.5C20.55 13.5 21 13.95 21 14.5V15.5Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalWifi4BarLock'

/**
 * Material Icon: Signal Wifi 4 Bar Lock
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signal_wifi_4_bar_lock Material Icon Docs}
 */
export const SignalWifi4BarLock = memo(Icon)
