import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 18H7.94101C7.64391 16.7274 6.30412 15.6857 5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.6944 15.687 16.3558 16.7276 16.059 18H13V13H11V18ZM16 20V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V20H16Z" />
    </Svg>
  )
}

Icon.displayName = 'LightbulbFill'

/**
 * Remix Icon: Lightbulb Fill
 * @see {@link https://remixicon.com/icon/lightbulb-fill Remix Icon Docs}
 */
export const LightbulbFill = memo(Icon)