import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.2 3H6.8L1.6 12L6.8 21H17.2L22.4 12L17.2 3ZM16.05 19H7.95L3.91 12L7.95 5H16.04L20.08 12L16.05 19Z" />
    </Svg>
  )
}

Icon.displayName = 'Hexagon'

/**
 * Material Icon: Hexagon
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hexagon Material Icon Docs}
 */
export const Hexagon = memo(Icon)
