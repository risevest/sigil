import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 3L9.01 13.55C8.41 13.21 7.73 13 7.01 13C4.79 13 3 14.79 3 17C3 19.21 4.79 21 7.01 21C9.23 21 11 19.21 11 17V7H15V3H9ZM21 12.43L17.57 9H16.97V13.55L14.22 10.8L13.37 11.65L16.73 15L13.38 18.35L14.23 19.2L16.98 16.45V21H17.58L21 17.57L18.42 15L21 12.43ZM18.17 11.3L19.3 12.43L18.17 13.56V11.3ZM19.3 17.57L18.17 18.7V16.44L19.3 17.57Z" />
    </Svg>
  )
}

Icon.displayName = 'MediaBluetoothOn'

/**
 * Material Icon: Media Bluetooth On
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:media_bluetooth_on Material Icon Docs}
 */
export const MediaBluetoothOn = memo(Icon)
