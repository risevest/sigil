import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5 4H19.5V20H16.5V4ZM4.5 14H7.5V20H4.5V14ZM10.5 9H13.5V20H10.5V9Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalCellularAlt'

/**
 * Material Icon: Signal Cellular Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signal_cellular_alt Material Icon Docs}
 */
export const SignalCellularAlt = memo(Icon)
