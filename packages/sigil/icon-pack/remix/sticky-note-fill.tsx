import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const StickyNoteFill = /* @__PURE__ */ memo(function StickyNoteFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m15 14-.117.007a1 1 0 0 0-.876.876L14 15v6H3.998A.996.996 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.447.993.999V14zm6 2-5 4.997V16z" />
    </Svg>
  )
})
/**
 * Remix Icon: Sticky Note Fill
 * @see {@link https://remixicon.com/icon/sticky-note-fill Remix Icon Docs}
 */
export { StickyNoteFill }
