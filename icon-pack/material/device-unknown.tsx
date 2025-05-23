import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM17 19H7V5H17V19ZM12 6.72C10.04 6.72 8.5 8.24 8.5 10.19H10.25C10.25 9.26 11.07 8.44 12 8.44C12.93 8.44 13.75 9.26 13.75 10.19C13.75 11.94 11.12 11.76 11.12 14.64H12.88C12.88 12.68 15.5 12.45 15.5 10.19C15.5 8.23 13.96 6.72 12 6.72ZM11 16H13V18H11V16Z" />
    </Svg>
  )
}

Icon.displayName = 'DeviceUnknown'

/**
 * Material Icon: Device Unknown
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:device_unknown Material Icon Docs}
 */
export const DeviceUnknown = memo(Icon)
