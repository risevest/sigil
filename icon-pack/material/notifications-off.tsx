import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.3051 21.75C12.4051 21.75 13.3051 20.85 13.3051 19.75H9.30505C9.30505 20.85 10.2051 21.75 11.3051 21.75ZM11.3051 6.25C13.7951 6.25 15.3051 8.27 15.3051 10.75V10.85L17.3051 12.85V10.75C17.3051 7.68 15.6751 5.11 12.8051 4.43V3.75C12.8051 2.92 12.1351 2.25 11.3051 2.25C10.4751 2.25 9.80505 2.92 9.80505 3.75V4.43C9.56505 4.49 9.33505 4.58 9.11505 4.66L10.7551 6.3C10.9351 6.28 11.1151 6.25 11.3051 6.25ZM4.71505 3.1L3.30505 4.51L6.11505 7.32C5.59505 8.32 5.30505 9.49 5.30505 10.75V15.75L3.30505 17.75V18.75H17.5451L19.2851 20.49L20.6951 19.08L4.71505 3.1ZM15.3051 16.75H7.30505V10.75C7.30505 10.07 7.42505 9.43 7.64505 8.85L15.3051 16.51V16.75Z" />
    </Svg>
  )
}

Icon.displayName = 'NotificationsOff'

/**
 * Material Icon: Notifications Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:notifications_off Material Icon Docs}
 */
export const NotificationsOff = memo(Icon)
