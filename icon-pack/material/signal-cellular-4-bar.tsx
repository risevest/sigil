import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 22H22V2L2 22Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalCellular4Bar'

/**
 * Material Icon: Signal Cellular 4 Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signal_cellular_4_bar Material Icon Docs}
 */
export const SignalCellular4Bar = memo(Icon)
