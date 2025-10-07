import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 22a8 8 0 1 1 16 0zm9-5.917V20h4.659A6.01 6.01 0 0 0 13 16.083M11 20v-3.917A6.01 6.01 0 0 0 6.341 20zm1-7c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4" />
    </Svg>
  )
})
Icon.displayName = 'User2Line'
/**
 * Remix Icon: User 2 Line
 * @see {@link https://remixicon.com/icon/user-2-line Remix Icon Docs}
 */
export const User2Line = Icon
