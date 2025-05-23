import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5 13H19V15H14V9H21C21 7.9 20.1 7 19 7H14C12.9 7 12 7.9 12 9V15C12 16.1 12.9 17 14 17H19C20.1 17 21 16.1 21 15V11H16.5V13Z" />
      <Path d="M3 13H8V15H3V17H8C9.1 17 10 16.1 10 15V13C10 11.9 9.1 11 8 11H5V9H10V7H3V13Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi5g'

/**
 * Material Icon: 5g
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:5g Material Icon Docs}
 */
export const Mi5g = memo(Icon)
