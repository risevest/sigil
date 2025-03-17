import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 16H11V17H13V16Z" />
      <Path d="M12 11C10.9 11 10 11.9 10 13C10 13.74 10.4 14.38 11 14.72V15.5H13V14.72C13.6 14.37 14 13.74 14 13C14 11.9 13.1 11 12 11Z" />
      <Path d="M18 1.01L6 1C4.9 1 4 1.9 4 3V21C4 22.1 4.9 23 6 23H18C19.1 23 20 22.1 20 21V3C20 1.9 19.1 1.01 18 1.01ZM18 21H6V20H18V21ZM18 18H6V6H18V18ZM18 4H6V3H18V4Z" />
      <Path d="M16.01 15.95C16.63 15.12 17 14.11 17 13C17 11.89 16.63 10.88 16.01 10.05L14.94 11.12C15.29 11.66 15.5 12.31 15.5 13C15.5 13.69 15.29 14.34 14.94 14.88L16.01 15.95Z" />
      <Path d="M9.06 14.88C8.71 14.34 8.5 13.69 8.5 13C8.5 11.07 10.07 9.5 12 9.5V10.75L14.25 8.75L12 6.75V8C9.24 8 7 10.24 7 13C7 14.11 7.37 15.12 7.99 15.95L9.06 14.88Z" />
    </Svg>
  )
}

Icon.displayName = 'OnDeviceTraining'

/**
 * Material Icon: On Device Training
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:on_device_training Material Icon Docs}
 */
export const OnDeviceTraining = memo(Icon)
