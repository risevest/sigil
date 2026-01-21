import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BookMarkedFill = /* @__PURE__ */ memo(function BookMarkedFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 22H6.5A3.5 3.5 0 0 1 3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2v-3H6.5a1.5 1.5 0 0 0 0 3zM10 4v8l3.5-2 3.5 2V4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Book Marked Fill
 * @see {@link https://remixicon.com/icon/book-marked-fill Remix Icon Docs}
 */
export { BookMarkedFill }
