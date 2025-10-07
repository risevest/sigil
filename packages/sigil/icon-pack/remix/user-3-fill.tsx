import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12" />
    </Svg>
  )
})
Icon.displayName = 'User3Fill'
/**
 * Remix Icon: User 3 Fill
 * @see {@link https://remixicon.com/icon/user-3-fill Remix Icon Docs}
 */
export const User3Fill = Icon
