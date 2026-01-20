import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const InputCursorMove = /* @__PURE__ */ memo(function InputCursorMove(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 21v-2h3V5H8V3h8v2h-3v14h3v2zM18.05 7.05 23 12l-4.95 4.95-1.414-1.414L20.172 12l-3.536-3.536zm-12.1 0 1.414 1.414L3.828 12l3.536 3.536L5.95 16.95 1 12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Input Cursor Move
 * @see {@link https://remixicon.com/icon/input-cursor-move Remix Icon Docs}
 */
export { InputCursorMove }
