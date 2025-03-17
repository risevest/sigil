import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 9V13H6V9H4V15H20V9H18Z" />
    </Svg>
  )
}

Icon.displayName = 'SpaceBar'

/**
 * Material Icon: Space Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:space_bar Material Icon Docs}
 */
export const SpaceBar = memo(Icon)
