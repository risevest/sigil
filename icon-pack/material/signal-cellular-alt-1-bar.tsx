import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.5 9H13.5V15H10.5V9Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalCellularAlt1Bar'

/**
 * Material Icon: Signal Cellular Alt 1 Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signal_cellular_alt_1_bar Material Icon Docs}
 */
export const SignalCellularAlt1Bar = memo(Icon)
