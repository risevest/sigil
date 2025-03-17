import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.235 12.01L16.555 14.33C16.835 13.61 16.995 12.82 16.995 12C16.995 11.18 16.835 10.41 16.565 9.69L14.235 12.01ZM19.525 6.71L18.265 7.97C18.895 9.18 19.245 10.54 19.245 11.99C19.245 13.44 18.885 14.81 18.265 16.01L19.465 17.21C20.435 15.67 21.005 13.85 21.005 11.9C20.995 10.01 20.455 8.23 19.525 6.71ZM15.705 7.71L9.995 2H8.995V9.59L4.40499 5L2.995 6.41L8.585 12L2.995 17.59L4.40499 19L8.995 14.41V22H9.995L15.705 16.29L11.405 12L15.705 7.71ZM10.995 5.83L12.875 7.71L10.995 9.59V5.83ZM12.875 16.29L10.995 18.17V14.41L12.875 16.29Z" />
    </Svg>
  )
}

Icon.displayName = 'BluetoothAudio'

/**
 * Material Icon: Bluetooth Audio
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bluetooth_audio Material Icon Docs}
 */
export const BluetoothAudio = memo(Icon)
