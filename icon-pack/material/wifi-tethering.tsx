import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 10.6748C10.9 10.6748 10 11.5748 10 12.6748C10 13.7748 10.9 14.6748 12 14.6748C13.1 14.6748 14 13.7748 14 12.6748C14 11.5748 13.1 10.6748 12 10.6748ZM18 12.6748C18 9.3648 15.31 6.6748 12 6.6748C8.69 6.6748 6 9.3648 6 12.6748C6 14.8948 7.21 16.8248 9 17.8648L10 16.1248C8.81 15.4248 8 14.1548 8 12.6748C8 10.4648 9.79 8.6748 12 8.6748C14.21 8.6748 16 10.4648 16 12.6748C16 14.1548 15.19 15.4248 14 16.1248L15 17.8648C16.79 16.8248 18 14.8948 18 12.6748ZM12 2.6748C6.48 2.6748 2 7.1548 2 12.6748C2 16.3748 4.01 19.5948 6.99 21.3248L7.99 19.5948C5.61 18.2048 4 15.6348 4 12.6748C4 8.2548 7.58 4.6748 12 4.6748C16.42 4.6748 20 8.2548 20 12.6748C20 15.6348 18.39 18.2048 16 19.5948L17 21.3248C19.99 19.5948 22 16.3748 22 12.6748C22 7.1548 17.52 2.6748 12 2.6748Z" />
    </Svg>
  )
}

Icon.displayName = 'WifiTethering'

/**
 * Material Icon: Wifi Tethering
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wifi_tethering Material Icon Docs}
 */
export const WifiTethering = memo(Icon)
