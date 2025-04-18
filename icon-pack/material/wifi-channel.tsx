import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 3C13.49 3 12.23 8.61 11.6 13.57C10.79 10.66 9.61 8 8 8C4.43 8 3 21 3 21H5.01C5.62 15.73 7.01 11.18 8 10.13C8.98 11.18 10.38 15.74 10.99 21H13C13.5 18.47 15 15 16 15C17 15 18.5 18.53 19 21H21C21 21 20.5 3 16 3ZM16 13C15.01 13 14.18 13.62 13.5 14.5C14.07 9.73 15.04 5.88 16 5.06C16.97 5.87 17.91 9.73 18.49 14.49C17.81 13.62 16.98 13 16 13Z" />
    </Svg>
  )
}

Icon.displayName = 'WifiChannel'

/**
 * Material Icon: Wifi Channel
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wifi_channel Material Icon Docs}
 */
export const WifiChannel = memo(Icon)
