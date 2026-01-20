import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BookReadLine = /* @__PURE__ */ memo(function BookReadLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM11 5H4v14h7zm2 0v14h7V5zm1 2h5v2h-5zm0 3h5v2h-5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Book Read Line
 * @see {@link https://remixicon.com/icon/book-read-line Remix Icon Docs}
 */
export { BookReadLine }
