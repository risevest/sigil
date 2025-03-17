import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 16.5C18.75 16.5 17.55 16.3 16.43 15.93C16.33 15.9 16.22 15.88 16.12 15.88C15.86 15.88 15.61 15.98 15.41 16.17L13.21 18.37C10.38 16.93 8.06 14.62 6.62 11.78L8.82 9.57C9.1 9.31 9.18 8.92 9.07 8.57C8.7 7.45 8.5 6.25 8.5 5C8.5 4.45 8.05 4 7.5 4H4C3.45 4 3 4.45 3 5C3 14.39 10.61 22 20 22C20.55 22 21 21.55 21 21V17.5C21 16.95 20.55 16.5 20 16.5ZM5.03 6H6.53C6.6 6.88 6.75 7.75 6.98 8.58L5.78 9.79C5.38 8.58 5.12 7.32 5.03 6ZM19 19.97C17.68 19.88 16.4 19.62 15.2 19.21L16.4 18.01C17.25 18.25 18.12 18.4 19 18.46V19.97ZM14.71 10.5L17 8.21V12H17.5L20.35 9.15L18.21 7L20.36 4.85L17.5 2H17V5.79L14.71 3.5L14 4.21L16.79 7L14 9.79L14.71 10.5ZM18 3.91L18.94 4.85L18 5.79V3.91ZM18 8.21L18.94 9.15L18 10.09V8.21Z" />
    </Svg>
  )
}

Icon.displayName = 'PhoneBluetoothSpeaker'

/**
 * Material Icon: Phone Bluetooth Speaker
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:phone_bluetooth_speaker Material Icon Docs}
 */
export const PhoneBluetoothSpeaker = memo(Icon)
