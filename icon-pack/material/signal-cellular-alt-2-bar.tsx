import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.5 11.5H10.5V17.5H7.5V11.5ZM13.5 6.5H16.5V17.5H13.5V6.5Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalCellularAlt2Bar'

/**
 * Material Icon: Signal Cellular Alt 2 Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signal_cellular_alt_2_bar Material Icon Docs}
 */
export const SignalCellularAlt2Bar = memo(Icon)
