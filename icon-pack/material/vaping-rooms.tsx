import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 18H3C4.33 18 5.71 17.82 7 17.5V20.5C5.71 20.18 4.33 20 3 20H2V18ZM22 17.5V20.5H8V17.5H22ZM11 19C11 18.72 10.78 18.5 10.5 18.5C10.22 18.5 10 18.72 10 19C10 19.28 10.22 19.5 10.5 19.5C10.78 19.5 11 19.28 11 19ZM22 14.26V16.5H20.5V14.27C20.5 12.03 18.74 10.2 16.5 10.2V8.7C17.52 8.7 18.35 7.87 18.35 6.85C18.35 5.83 17.52 5 16.5 5V3.5C18.35 3.5 19.85 5 19.85 6.85C19.85 7.78 19.47 8.62 18.85 9.23C20.72 10.12 22 12.04 22 14.26ZM19.5 14.86V16.5H18V15.2C18 13.89 17.08 13.15 16.03 13.15H14.5C12.65 13.15 11.15 11.65 11.15 9.8C11.15 7.95 12.65 6.45 14.5 6.45V7.95C13.48 7.95 12.65 8.68 12.65 9.7C12.65 10.72 13.48 11.7 14.5 11.7H16.03C17.9 11.7 19.5 13.05 19.5 14.86Z" />
    </Svg>
  )
}

Icon.displayName = 'VapingRooms'

/**
 * Material Icon: Vaping Rooms
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:vaping_rooms Material Icon Docs}
 */
export const VapingRooms = memo(Icon)
