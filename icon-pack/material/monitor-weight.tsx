import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6ZM11 9.5H10V8.5H11V9.5ZM12.5 9.5H11.5V8.5H12.5V9.5ZM14 9.5H13V8.5H14V9.5Z" />
    </Svg>
  )
}

Icon.displayName = 'MonitorWeight'

/**
 * Material Icon: Monitor Weight
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:monitor_weight Material Icon Docs}
 */
export const MonitorWeight = memo(Icon)
