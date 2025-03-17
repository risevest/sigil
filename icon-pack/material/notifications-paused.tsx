import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.5 9.55H12.3L9.5 12.95V14.75H14.5V12.95H11.7L14.5 9.55V7.75H9.5V9.55ZM18 15.75V10.75C18 7.68 16.37 5.11 13.5 4.43V3.75C13.5 2.92 12.83 2.25 12 2.25C11.17 2.25 10.5 2.92 10.5 3.75V4.43C7.64 5.11 6 7.67 6 10.75V15.75L4 17.75V18.75H20V17.75L18 15.75ZM16 16.75H8V10.75C8 8.27 9.51 6.25 12 6.25C14.49 6.25 16 8.27 16 10.75V16.75ZM12 21.75C13.1 21.75 14 20.85 14 19.75H10C10 20.85 10.9 21.75 12 21.75Z" />
    </Svg>
  )
}

Icon.displayName = 'NotificationsPaused'

/**
 * Material Icon: Notifications Paused
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:notifications_paused Material Icon Docs}
 */
export const NotificationsPaused = memo(Icon)
