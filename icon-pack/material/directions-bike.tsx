import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.5 5.75C16.6 5.75 17.5 4.85 17.5 3.75C17.5 2.65 16.6 1.75 15.5 1.75C14.4 1.75 13.5 2.65 13.5 3.75C13.5 4.85 14.4 5.75 15.5 5.75ZM5 12.25C2.2 12.25 0 14.45 0 17.25C0 20.05 2.2 22.25 5 22.25C7.8 22.25 10 20.05 10 17.25C10 14.45 7.8 12.25 5 12.25ZM5 20.75C3.1 20.75 1.5 19.15 1.5 17.25C1.5 15.35 3.1 13.75 5 13.75C6.9 13.75 8.5 15.35 8.5 17.25C8.5 19.15 6.9 20.75 5 20.75ZM10.8 10.75L13.2 8.35L14 9.15C15.3 10.45 17 11.25 19.1 11.25V9.25C17.6 9.25 16.4 8.65 15.5 7.75L13.6 5.85C13.1 5.45 12.6 5.25 12 5.25C11.4 5.25 10.9 5.45 10.6 5.85L7.8 8.65C7.4 9.05 7.2 9.55 7.2 10.05C7.2 10.65 7.4 11.15 7.8 11.45L11 14.25V19.25H13V13.05L10.8 10.75ZM19 12.25C16.2 12.25 14 14.45 14 17.25C14 20.05 16.2 22.25 19 22.25C21.8 22.25 24 20.05 24 17.25C24 14.45 21.8 12.25 19 12.25ZM19 20.75C17.1 20.75 15.5 19.15 15.5 17.25C15.5 15.35 17.1 13.75 19 13.75C20.9 13.75 22.5 15.35 22.5 17.25C22.5 19.15 20.9 20.75 19 20.75Z" />
    </Svg>
  )
}

Icon.displayName = 'DirectionsBike'

/**
 * Material Icon: Directions Bike
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:directions_bike Material Icon Docs}
 */
export const DirectionsBike = memo(Icon)
