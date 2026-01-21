import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Book2Line = /* @__PURE__ */ memo(function Book2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 18H6a1 1 0 1 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16zM5 16.05q.243-.05.5-.05H19V4H5zM16 9H8V7h8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Book 2 Line
 * @see {@link https://remixicon.com/icon/book-2-line Remix Icon Docs}
 */
export { Book2Line }
