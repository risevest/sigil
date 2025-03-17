import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 6.83V20H6.83L20 6.83ZM22 2L2 22H22V2Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalCellularNull'

/**
 * Material Icon: Signal Cellular Null
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signal_cellular_null Material Icon Docs}
 */
export const SignalCellularNull = memo(Icon)
