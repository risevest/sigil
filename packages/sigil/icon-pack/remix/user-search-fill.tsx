import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 14v8H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m9.446 7.032 1.504 1.503-1.415 1.415-1.503-1.504a4 4 0 1 1 1.414-1.414M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Svg>
  )
})
Icon.displayName = 'UserSearchFill'
/**
 * Remix Icon: User Search Fill
 * @see {@link https://remixicon.com/icon/user-search-fill Remix Icon Docs}
 */
export const UserSearchFill = Icon
