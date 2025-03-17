import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2.5C8 2.5 4 3 4 6.5V16C4 17.93 5.57 19.5 7.5 19.5L6 20.5V21.5H18V20.5L16.5 19.5C18.43 19.5 20 17.93 20 16V6.5C20 3 16.42 2.5 12 2.5ZM12 4.5C15.71 4.5 17.13 4.96 17.67 5.5H6.43C7.03 4.98 8.48 4.5 12 4.5ZM6 7.5H11V10.5H6V7.5ZM18 16C18 16.83 17.33 17.5 16.5 17.5H7.5C6.67 17.5 6 16.83 6 16V12.5H18V16ZM18 10.5H13V7.5H18V10.5Z" />
      <Path d="M8.5 16.5C9.32843 16.5 10 15.8284 10 15C10 14.1716 9.32843 13.5 8.5 13.5C7.67157 13.5 7 14.1716 7 15C7 15.8284 7.67157 16.5 8.5 16.5Z" />
      <Path d="M15.5 16.5C16.3284 16.5 17 15.8284 17 15C17 14.1716 16.3284 13.5 15.5 13.5C14.6716 13.5 14 14.1716 14 15C14 15.8284 14.6716 16.5 15.5 16.5Z" />
    </Svg>
  )
}

Icon.displayName = 'DirectionsSubwayFilled'

/**
 * Material Icon: Directions Subway Filled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:directions_subway_filled Material Icon Docs}
 */
export const DirectionsSubwayFilled = memo(Icon)
