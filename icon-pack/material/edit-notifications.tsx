import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.08 6.25L18.85 8.02L13.87 13H12.1V11.23L17.08 6.25ZM20.35 5.81L19.29 4.75C19.09 4.55 18.78 4.55 18.58 4.75L17.73 5.6L19.5 7.37L20.35 6.52C20.55 6.32 20.55 6 20.35 5.81ZM17.5 12.2V17H19.5V19H3.5V17H5.5V10C5.5 7.21 7.41 4.86 10 4.2V3.5C10 2.67 10.67 2 11.5 2C12.33 2 13 2.67 13 3.5V4.2C13.82 4.41 14.57 4.79 15.21 5.29L13.78 6.72C13.14 6.26 12.35 6 11.5 6C9.29 6 7.5 7.79 7.5 10V17H15.5V14.2L17.5 12.2ZM9.5 20H13.5C13.5 21.1 12.6 22 11.5 22C10.4 22 9.5 21.1 9.5 20Z" />
    </Svg>
  )
}

Icon.displayName = 'EditNotifications'

/**
 * Material Icon: Edit Notifications
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:edit_notifications Material Icon Docs}
 */
export const EditNotifications = memo(Icon)
