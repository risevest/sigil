import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const StickyNote2Line = /* @__PURE__ */ memo(function StickyNote2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3.998 21A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999V16l-5.003 5zM5 19h10.169L19 15.171V5H5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Sticky Note 2 Line
 * @see {@link https://remixicon.com/icon/sticky-note-2-line Remix Icon Docs}
 */
export { StickyNote2Line }
