import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V20.66C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V5.33C17 4.6 16.4 4 15.67 4ZM13 18H11V16H13V18ZM14.3 12.69C14.3 12.69 13.92 13.11 13.63 13.4C13.15 13.88 12.8 14.55 12.8 15H11.2C11.2 14.17 11.66 13.48 12.13 13L13.06 12.06C13.33 11.79 13.5 11.41 13.5 11C13.5 10.17 12.83 9.5 12 9.5C11.17 9.5 10.5 10.17 10.5 11H9C9 9.34 10.34 8 12 8C13.66 8 15 9.34 15 11C15 11.66 14.73 12.26 14.3 12.69Z" />
    </Svg>
  )
}

Icon.displayName = 'BatteryUnknown'

/**
 * Material Icon: Battery Unknown
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:battery_unknown Material Icon Docs}
 */
export const BatteryUnknown = memo(Icon)
