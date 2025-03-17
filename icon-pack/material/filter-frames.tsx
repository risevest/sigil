import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 5H16L12 1L8 5H4C2.9 5 2 5.9 2 7V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V7C22 5.9 21.1 5 20 5ZM20 21H4V7H8.52L12.04 3.5L15.52 7H20V21ZM6 19H18V9H6V19ZM8 11H16V17H8V11Z" />
    </Svg>
  )
}

Icon.displayName = 'FilterFrames'

/**
 * Material Icon: Filter Frames
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:filter_frames Material Icon Docs}
 */
export const FilterFrames = memo(Icon)
