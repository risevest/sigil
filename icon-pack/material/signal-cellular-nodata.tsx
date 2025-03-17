import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 13H13V22H2L22 2V13ZM21 15.41L19.59 14L17.5 16.09L15.41 14L14 15.41L16.09 17.5L14 19.59L15.41 21L17.5 18.92L19.59 21L21 19.59L18.92 17.5L21 15.41Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalCellularNodata'

/**
 * Material Icon: Signal Cellular Nodata
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signal_cellular_nodata Material Icon Docs}
 */
export const SignalCellularNodata = memo(Icon)
