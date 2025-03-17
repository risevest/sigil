import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 5V21C17 21.55 16.55 22 16 22H8C7.45 22 7 21.55 7 21V5C7 4.45 7.45 4 8 4H10V2H14V4H16C16.55 4 17 4.45 17 5ZM15 6H9V8H15V6Z" />
    </Svg>
  )
}

Icon.displayName = 'Battery6Bar'

/**
 * Material Icon: Battery 6 Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:battery_6_bar Material Icon Docs}
 */
export const Battery6Bar = memo(Icon)
