import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 18.4853L16.2426 14.2426C18.5858 11.8995 18.5858 8.10051 16.2426 5.75736C13.8995 3.41421 10.1005 3.41421 7.75736 5.75736C5.41421 8.10051 5.41421 11.8995 7.75736 14.2426L12 18.4853ZM17.6569 15.6569L12 21.3137L6.34315 15.6569C3.21895 12.5327 3.21895 7.46734 6.34315 4.34315C9.46734 1.21895 14.5327 1.21895 17.6569 4.34315C20.781 7.46734 20.781 12.5327 17.6569 15.6569ZM5 22H19V24H5V22Z" />
    </Svg>
  )
}

Icon.displayName = 'MapPin5Line'

/**
 * Remix Icon: Map Pin 5 Line
 * @see {@link https://remixicon.com/icon/map-pin-5-line Remix Icon Docs}
 */
export const MapPin5Line = memo(Icon)
