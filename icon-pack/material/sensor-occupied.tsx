import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_5295)">
        <Path d="M12 10.9999C13.66 10.9999 15 9.65992 15 7.99992C15 6.33992 13.66 4.99992 12 4.99992C10.34 4.99992 8.99998 6.33992 8.99998 7.99992C8.99998 9.65992 10.34 10.9999 12 10.9999ZM12 6.99992C12.55 6.99992 13 7.44992 13 7.99992C13 8.54992 12.55 8.99992 12 8.99992C11.45 8.99992 11 8.54992 11 7.99992C11 7.44992 11.45 6.99992 12 6.99992Z" />
        <Path d="M12 11.9999C10.16 11.9999 8.43998 12.4999 6.96998 13.3699C6.35998 13.7199 5.99998 14.3899 5.99998 15.0899V16.9999H18V15.0899C18 14.3899 17.64 13.7299 17.03 13.3699C15.56 12.4999 13.84 11.9999 12 11.9999ZM8.13998 14.9999C9.31998 14.3499 10.65 13.9999 12 13.9999C13.35 13.9999 14.68 14.3499 15.85 14.9999H8.13998Z" />
        <Path d="M21.23 8.14992L23.08 7.37992C21.86 4.46992 19.53 2.12992 16.62 0.919922L15.85 2.76992C18.27 3.78992 20.21 5.72992 21.23 8.14992Z" />
        <Path d="M8.14998 2.76992L7.37998 0.919922C4.46998 2.13992 2.13998 4.46992 0.919983 7.37992L2.76998 8.14992C3.78998 5.72992 5.72998 3.78992 8.14998 2.76992Z" />
        <Path d="M2.76998 15.8499L0.919983 16.6199C2.13998 19.5299 4.46998 21.8699 7.37998 23.0799L8.14998 21.2299C5.72998 20.2099 3.78998 18.2699 2.76998 15.8499Z" />
        <Path d="M15.85 21.2299L16.62 23.0799C19.53 21.8599 21.87 19.5299 23.08 16.6199L21.23 15.8499C20.21 18.2699 18.27 20.2099 15.85 21.2299Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_5295">
          <Rect width="24" height="24" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'SensorOccupied'

/**
 * Material Icon: Sensor Occupied
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sensor_occupied Material Icon Docs}
 */
export const SensorOccupied = memo(Icon)
