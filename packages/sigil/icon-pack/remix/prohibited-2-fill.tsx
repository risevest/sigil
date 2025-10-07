import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.257 18.329A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2c2.401 0 4.605.846 6.329 2.257zM19.743 5.67A9.96 9.96 0 0 1 22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-6.329-2.257z" />
    </Svg>
  )
})
Icon.displayName = 'Prohibited2Fill'
/**
 * Remix Icon: Prohibited 2 Fill
 * @see {@link https://remixicon.com/icon/prohibited-2-fill Remix Icon Docs}
 */
export const Prohibited2Fill = Icon
