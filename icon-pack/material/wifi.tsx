import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M1 8.77613L3 10.7761C7.97 5.80613 16.03 5.80613 21 10.7761L23 8.77613C16.93 2.70613 7.08 2.70613 1 8.77613ZM9 16.7761L12 19.7761L15 16.7761C13.35 15.1161 10.66 15.1161 9 16.7761ZM5 12.7761L7 14.7761C9.76 12.0161 14.24 12.0161 17 14.7761L19 12.7761C15.14 8.91613 8.87 8.91613 5 12.7761Z" />
    </Svg>
  )
}

Icon.displayName = 'Wifi'

/**
 * Material Icon: Wifi
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wifi Material Icon Docs}
 */
export const Wifi = memo(Icon)
