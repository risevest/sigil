import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 5H3C1.9 5 1 5.89 1 7V16H3C3 17.66 4.34 19 6 19C7.66 19 9 17.66 9 16H15C15 17.66 16.34 19 18 19C19.66 19 21 17.66 21 16H23V11L17 5ZM15 7H16L19 10H15V7ZM9 7H13V10H9V7ZM3 7H7V10H3V7ZM6 17.25C5.31 17.25 4.75 16.69 4.75 16C4.75 15.31 5.31 14.75 6 14.75C6.69 14.75 7.25 15.31 7.25 16C7.25 16.69 6.69 17.25 6 17.25ZM18 17.25C17.31 17.25 16.75 16.69 16.75 16C16.75 15.31 17.31 14.75 18 14.75C18.69 14.75 19.25 15.31 19.25 16C19.25 16.69 18.69 17.25 18 17.25ZM21 14H20.22C19.67 13.39 18.88 13 18 13C17.12 13 16.33 13.39 15.78 14H8.22C7.67 13.39 6.89 13 6 13C5.11 13 4.33 13.39 3.78 14H3V12H21V14Z" />
    </Svg>
  )
}

Icon.displayName = 'AirportShuttle'

/**
 * Material Icon: Airport Shuttle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:airport_shuttle Material Icon Docs}
 */
export const AirportShuttle = memo(Icon)
