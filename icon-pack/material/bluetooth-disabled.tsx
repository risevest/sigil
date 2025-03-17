import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 5.83L14.88 7.71L13.28 9.31L14.69 10.72L17.71 7.7L12 2H11V7.03L13 9.03V5.83ZM5.41 4L4 5.41L10.59 12L5 17.59L6.41 19L11 14.41V22H12L16.29 17.71L18.59 20L20 18.59L5.41 4ZM13 18.17V14.41L14.88 16.29L13 18.17Z" />
    </Svg>
  )
}

Icon.displayName = 'BluetoothDisabled'

/**
 * Material Icon: Bluetooth Disabled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bluetooth_disabled Material Icon Docs}
 */
export const BluetoothDisabled = memo(Icon)
