import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.5 17C7.32843 17 8 16.3284 8 15.5C8 14.6716 7.32843 14 6.5 14C5.67157 14 5 14.6716 5 15.5C5 16.3284 5.67157 17 6.5 17Z" />
      <Path d="M15.5 17C16.3284 17 17 16.3284 17 15.5C17 14.6716 16.3284 14 15.5 14C14.6716 14 14 14.6716 14 15.5C14 16.3284 14.6716 17 15.5 17Z" />
      <Path d="M18 18H4V13H15V11H4.81L5.85 8H15V6H5.5C4.84 6 4.29 6.42 4.08 7.01L2 13V21C2 21.55 2.45 22 3 22H4C4.55 22 5 21.55 5 21V20H17V21C17 21.55 17.45 22 18 22H19C19.55 22 20 21.55 20 21V13H18V18Z" />
      <Path d="M22 4.85L19.15 2H18.65V5.79L16.35 3.5L15.65 4.2L18.44 7L15.65 9.79L16.35 10.5L18.65 8.2V12H19.15L22 9.14L19.85 7L22 4.85ZM19.65 3.91L20.59 4.85L19.65 5.79V3.91ZM20.59 9.14L19.65 10.08V8.2L20.59 9.14Z" />
    </Svg>
  )
}

Icon.displayName = 'BluetoothDrive'

/**
 * Material Icon: Bluetooth Drive
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bluetooth_drive Material Icon Docs}
 */
export const BluetoothDrive = memo(Icon)
