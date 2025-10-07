import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 20h14v2H5zm7-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16" />
    </Svg>
  )
})
Icon.displayName = 'User4Fill'
/**
 * Remix Icon: User 4 Fill
 * @see {@link https://remixicon.com/icon/user-4-fill Remix Icon Docs}
 */
export const User4Fill = Icon
