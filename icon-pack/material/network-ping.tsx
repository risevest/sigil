import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 14.67L3.41 6.09L2 7.5L10.5 16H4V18H20V16H13.5L18.65 10.85C18.91 10.95 19.2 11 19.5 11C20.88 11 22 9.88 22 8.5C22 7.12 20.88 6 19.5 6C18.12 6 17 7.12 17 8.5C17 8.85 17.07 9.17 17.2 9.47L12 14.67Z" />
    </Svg>
  )
}

Icon.displayName = 'NetworkPing'

/**
 * Material Icon: Network Ping
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:network_ping Material Icon Docs}
 */
export const NetworkPing = memo(Icon)
