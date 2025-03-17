import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.5 14.5H6.5V7.91L18.09 19.5L19.5 18.09L7.91 6.5H14.5V4.5H4.5V14.5Z" />
    </Svg>
  )
}

Icon.displayName = 'NorthWest'

/**
 * Material Icon: North West
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:north_west Material Icon Docs}
 */
export const NorthWest = memo(Icon)
