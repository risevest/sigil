import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.92 8C13.44 5.16 10.97 3 8 3C4.69 3 2 5.69 2 9C2 11.97 4.16 14.44 7 14.92V21H9V14.91C9 13.93 8.29 13.11 7.33 12.94C5.44 12.63 4 10.98 4 9C4 6.79 5.79 5 8 5C9.98 5 11.63 6.44 11.94 8.33C12.11 9.29 12.93 10 13.91 10H18.17L16.58 11.59L18 13L22 9L18 5L16.59 6.41L18.17 8H13.92Z" />
    </Svg>
  )
}

Icon.displayName = 'RoundaboutRight'

/**
 * Material Icon: Roundabout Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:roundabout_right Material Icon Docs}
 */
export const RoundaboutRight = memo(Icon)
