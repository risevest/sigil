import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 14V17H6V10C6 7.79 7.79 6 10 6C10.85 6 11.64 6.26 12.28 6.72L13.71 5.29C13.07 4.78 12.32 4.41 11.5 4.2V3.5C11.5 2.67 10.83 2 10 2C9.17 2 8.5 2.67 8.5 3.5V4.2C5.91 4.86 4 7.21 4 10V17H2V19H18V17H16V14H14ZM10 22C11.1 22 12 21.1 12 20H8C8 21.1 8.9 22 10 22ZM22 8H19V5H17V8H14V10H17V13H19V10H22V8Z" />
    </Svg>
  )
}

Icon.displayName = 'NotificationAdd'

/**
 * Material Icon: Notification Add
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:notification_add Material Icon Docs}
 */
export const NotificationAdd = memo(Icon)
