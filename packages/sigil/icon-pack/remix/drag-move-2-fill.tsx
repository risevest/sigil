import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DragMove2Fill = /* @__PURE__ */ memo(function DragMove2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18 11V8l4 4-4 4v-3h-5v5h3l-4 4-4-4h3v-5H6v3l-4-4 4-4v3h5V6H8l4-4 4 4h-3v5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Drag Move 2 Fill
 * @see {@link https://remixicon.com/icon/drag-move-2-fill Remix Icon Docs}
 */
export { DragMove2Fill }
