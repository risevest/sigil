import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V20.66C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V5.33C17 4.6 16.4 4 15.67 4ZM13 18H11V16H13V18ZM13 14H11V9H13V14Z" />
    </Svg>
  )
}

Icon.displayName = 'BatteryAlert'

/**
 * Material Icon: Battery Alert
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:battery_alert Material Icon Docs}
 */
export const BatteryAlert = memo(Icon)
