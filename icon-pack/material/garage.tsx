import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM20 20H4V4H20V20Z" />
      <Path d="M9 14C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14Z" />
      <Path d="M15 14C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12C14.4477 12 14 12.4477 14 13C14 13.5523 14.4477 14 15 14Z" />
      <Path d="M5.78 18.5H6.22C6.65 18.5 7 18.14 7 17.69V16.5H17V17.69C17 18.14 17.34 18.5 17.78 18.5H18.22C18.65 18.5 19 18.14 19 17.69V11.19C18.18 8.73 17.66 7.16 17.44 6.5C17.39 6.34 17.32 6.21 17.25 6.1C17.23 6.08 17.22 6.06 17.2 6.03C16.82 5.51 16.28 5.5 16.28 5.5H7.72C7.72 5.5 7.18 5.51 6.8 6.04C6.78 6.06 6.77 6.08 6.75 6.1C6.68 6.21 6.61 6.34 6.56 6.5C6.34 7.16 5.82 8.72 5 11.19V17.69C5 18.14 5.35 18.5 5.78 18.5ZM8.33 7.5H15.67L15.9 8.19L16.33 9.5H7.67L8.33 7.5ZM7 11.5H17V14.5H7V11.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Garage'

/**
 * Material Icon: Garage
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:garage Material Icon Docs}
 */
export const Garage = memo(Icon)
