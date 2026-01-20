import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BookOpenFill = /* @__PURE__ */ memo(function BookOpenFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 21h-8V6a3 3 0 0 1 3-3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1m-10 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a3 3 0 0 1 3 3zm0 0h2v2h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Book Open Fill
 * @see {@link https://remixicon.com/icon/book-open-fill Remix Icon Docs}
 */
export { BookOpenFill }
