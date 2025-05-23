import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 5.25C14.1 5.25 15 4.35 15 3.25C15 2.15 14.1 1.25 13 1.25C11.9 1.25 11 2.15 11 3.25C11 4.35 11.9 5.25 13 5.25ZM9.3 8.65L6.5 22.75H8.6L10.4 14.75L12.5 16.75V22.75H14.5V15.25L12.4 13.25L13 10.25C14.3 11.75 16.3 12.75 18.5 12.75V10.75C16.6 10.75 15 9.75 14.2 8.35L13.2 6.75C12.64 5.86 11.52 5.5 10.55 5.91L5.5 8.05V12.75H7.5V9.35L9.3 8.65Z" />
    </Svg>
  )
}

Icon.displayName = 'DirectionsWalk'

/**
 * Material Icon: Directions Walk
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:directions_walk Material Icon Docs}
 */
export const DirectionsWalk = memo(Icon)
