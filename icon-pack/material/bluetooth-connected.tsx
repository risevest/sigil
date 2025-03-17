import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 12L5 10L3 12L5 14L7 12ZM17.71 7.71L12 2H11V9.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L11 14.41V22H12L17.71 16.29L13.41 12L17.71 7.71ZM13 5.83L14.88 7.71L13 9.59V5.83ZM14.88 16.29L13 18.17V14.41L14.88 16.29ZM19 10L17 12L19 14L21 12L19 10Z" />
    </Svg>
  )
}

Icon.displayName = 'BluetoothConnected'

/**
 * Material Icon: Bluetooth Connected
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bluetooth_connected Material Icon Docs}
 */
export const BluetoothConnected = memo(Icon)
