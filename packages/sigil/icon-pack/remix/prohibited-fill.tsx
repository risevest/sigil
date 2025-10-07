import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19.743 18.329A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10a9.96 9.96 0 0 0-6.329 2.257zM4.257 5.67A9.96 9.96 0 0 0 2 12c0 5.523 4.477 10 10 10a9.96 9.96 0 0 0 6.329-2.257z" />
    </Svg>
  )
})
Icon.displayName = 'ProhibitedFill'
/**
 * Remix Icon: Prohibited Fill
 * @see {@link https://remixicon.com/icon/prohibited-fill Remix Icon Docs}
 */
export const ProhibitedFill = Icon
