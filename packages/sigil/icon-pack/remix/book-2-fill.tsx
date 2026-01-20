import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Book2Fill = /* @__PURE__ */ memo(function Book2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 18H6a1 1 0 1 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16zm-5-9V7H8v2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Book 2 Fill
 * @see {@link https://remixicon.com/icon/book-2-fill Remix Icon Docs}
 */
export { Book2Fill }
