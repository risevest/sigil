import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.5 9.5H17.5V16.09L5.91 4.5L4.5 5.91L16.09 17.5H9.5V19.5H19.5V9.5Z" />
    </Svg>
  )
}

Icon.displayName = 'SouthEast'

/**
 * Material Icon: South East
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:south_east Material Icon Docs}
 */
export const SouthEast = memo(Icon)
