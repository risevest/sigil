import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5.234 7.73A8 8 0 0 1 12 4a8 8 0 0 1 6.767 3.73l1.69-1.07A10 10 0 0 0 12 2a10 10 0 0 0-8.456 4.66zM12 20a8 8 0 0 1-6.766-3.73l-1.69 1.07A10 10 0 0 0 12 22a10 10 0 0 0 8.457-4.66l-1.69-1.07A8 8 0 0 1 12 20m0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 1a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4m-6-1a3 3 0 1 1-6 0 3 3 0 0 1 6 0m15 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </Svg>
  )
})
Icon.displayName = 'UserCommunityFill'
/**
 * Remix Icon: User Community Fill
 * @see {@link https://remixicon.com/icon/user-community-fill Remix Icon Docs}
 */
export const UserCommunityFill = Icon
