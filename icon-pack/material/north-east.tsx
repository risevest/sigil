import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.5 4.5V6.5H16.09L4.5 18.09L5.91 19.5L17.5 7.91V14.5H19.5V4.5H9.5Z" />
    </Svg>
  )
}

Icon.displayName = 'NorthEast'

/**
 * Material Icon: North East
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:north_east Material Icon Docs}
 */
export const NorthEast = memo(Icon)
