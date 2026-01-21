import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CursorFill = /* @__PURE__ */ memo(function CursorFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13.91 12.36 17 20.854l-2.818 1.026-3.092-8.494-4.172 3.156 1.49-14.909 10.726 10.463z" />
    </Svg>
  )
})
/**
 * Remix Icon: Cursor Fill
 * @see {@link https://remixicon.com/icon/cursor-fill Remix Icon Docs}
 */
export { CursorFill }
