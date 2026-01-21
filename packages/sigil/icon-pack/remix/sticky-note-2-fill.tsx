import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const StickyNote2Fill = /* @__PURE__ */ memo(function StickyNote2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m21 16-5.003 5H3.998A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999z" />
    </Svg>
  )
})
/**
 * Remix Icon: Sticky Note 2 Fill
 * @see {@link https://remixicon.com/icon/sticky-note-2-fill Remix Icon Docs}
 */
export { StickyNote2Fill }
