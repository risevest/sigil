import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M3.42 2.61L2.01 4.03L4.1 6.12C2.79 7.82 2 9.94 2 12.25C2 15.95 4.01 19.17 6.99 20.9L7.99 19.17C5.61 17.78 4 15.21 4 12.25C4 10.49 4.57 8.87 5.53 7.56L6.96 9C6.36 9.93 6 11.05 6 12.25C6 14.47 7.21 16.4 9 17.44L10 15.7C8.81 15 8 13.73 8 12.25C8 11.6 8.17 11 8.44 10.46L10.02 12.04L10 12.25C10 13.35 10.9 14.25 12 14.25L12.21 14.23L19.73 21.75L21.14 20.34L3.42 2.61ZM17.71 14.07C17.89 13.5 18 12.88 18 12.25C18 8.94 15.31 6.25 12 6.25C11.37 6.25 10.75 6.36 10.18 6.54L11.9 8.26C11.93 8.26 11.96 8.25 12 8.25C14.21 8.25 16 10.04 16 12.25C16 12.29 15.99 12.32 15.99 12.36L17.71 14.07ZM12 4.25C16.42 4.25 20 7.83 20 12.25C20 13.45 19.71 14.57 19.23 15.6L20.72 17.09C21.53 15.65 22 14.01 22 12.25C22 6.73 17.52 2.25 12 2.25C10.24 2.25 8.6 2.73 7.16 3.53L8.64 5.01C9.66 4.53 10.8 4.25 12 4.25Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'PortableWifiOff'

/**
 * Material Icon: Portable Wifi Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:portable_wifi_off Material Icon Docs}
 */
export const PortableWifiOff = memo(Icon)
