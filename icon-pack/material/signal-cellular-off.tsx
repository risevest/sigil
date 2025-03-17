import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.43 1L13.12 9.31L21.43 17.61V1ZM5.33999 4.36L3.92999 5.77L10.29 12.14L1.42999 21H19.16L21.16 23L22.57 21.59L5.33999 4.36Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalCellularOff'

/**
 * Material Icon: Signal Cellular Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signal_cellular_off Material Icon Docs}
 */
export const SignalCellularOff = memo(Icon)
