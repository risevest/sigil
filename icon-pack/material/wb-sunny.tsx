import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.76 5.3398L4.96 3.5498L3.55 4.9598L5.34 6.7498L6.76 5.3398ZM1 10.9998H4V12.9998H1V10.9998ZM11 1.0498H13V3.9998H11V1.0498ZM19.04 3.5448L20.448 4.9518L18.658 6.7418L17.251 5.3338L19.04 3.5448ZM17.24 18.6598L19.03 20.4598L20.44 19.0498L18.64 17.2598L17.24 18.6598ZM20 10.9998H23V12.9998H20V10.9998ZM12 5.9998C8.69 5.9998 6 8.6898 6 11.9998C6 15.3098 8.69 17.9998 12 17.9998C15.31 17.9998 18 15.3098 18 11.9998C18 8.6898 15.31 5.9998 12 5.9998ZM12 15.9998C9.79 15.9998 8 14.2098 8 11.9998C8 9.7898 9.79 7.9998 12 7.9998C14.21 7.9998 16 9.7898 16 11.9998C16 14.2098 14.21 15.9998 12 15.9998ZM11 19.9998H13V22.9498H11V19.9998ZM3.55 19.0398L4.96 20.4498L6.75 18.6498L5.34 17.2398L3.55 19.0398Z" />
    </Svg>
  )
}

Icon.displayName = 'WbSunny'

/**
 * Material Icon: Wb Sunny
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wb_sunny Material Icon Docs}
 */
export const WbSunny = memo(Icon)
