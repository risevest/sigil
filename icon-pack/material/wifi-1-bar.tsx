import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.53 10.96L12 14.5L8.47 10.96C9.37 10.06 10.62 9.5 12 9.5C13.38 9.5 14.63 10.06 15.53 10.96Z" />
    </Svg>
  )
}

Icon.displayName = 'Wifi1Bar'

/**
 * Material Icon: Wifi 1 Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wifi_1_bar Material Icon Docs}
 */
export const Wifi1Bar = memo(Icon)
