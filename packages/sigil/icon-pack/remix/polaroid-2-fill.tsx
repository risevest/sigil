import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007zM6 17v2h12v-2zM5 5v2h2V5zm7 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
    </Svg>
  )
})
Icon.displayName = 'Polaroid2Fill'
/**
 * Remix Icon: Polaroid 2 Fill
 * @see {@link https://remixicon.com/icon/polaroid-2-fill Remix Icon Docs}
 */
export const Polaroid2Fill = Icon
