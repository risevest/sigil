import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.05 16.9C19.45 16.2 19.75 15.4 19.75 14.5C19.75 12 17.75 10 15.25 10C12.75 10 10.75 12 10.75 14.5C10.75 17 12.75 19 15.25 19C16.15 19 16.95 18.7 17.65 18.3L20.85 21.5L22.25 20.1L19.05 16.9ZM15.25 17C13.85 17 12.75 15.9 12.75 14.5C12.75 13.1 13.85 12 15.25 12C16.65 12 17.75 13.1 17.75 14.5C17.75 15.9 16.65 17 15.25 17ZM11.75 20V22C6.23 22 1.75 17.52 1.75 12C1.75 6.48 6.23 2 11.75 2C16.59 2 20.62 5.44 21.55 10H19.48C18.84 7.54 17.08 5.53 14.75 4.59V5C14.75 6.1 13.85 7 12.75 7H10.75V9C10.75 9.55 10.3 10 9.75 10H7.75V12H9.75V15H8.75L3.96 10.21C3.83 10.79 3.75 11.38 3.75 12C3.75 16.41 7.34 20 11.75 20Z" />
    </Svg>
  )
}

Icon.displayName = 'TravelExplore'

/**
 * Material Icon: Travel Explore
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:travel_explore Material Icon Docs}
 */
export const TravelExplore = memo(Icon)
