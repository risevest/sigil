import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BookOpenLine = /* @__PURE__ */ memo(function BookOpenLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a4 4 0 0 1 3 1.354A4 4 0 0 1 15 3h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm7-2V5h-5a2 2 0 0 0-2 2v12zm-9 0V7a2 2 0 0 0-2-2H4v14z" />
    </Svg>
  )
})
/**
 * Remix Icon: Book Open Line
 * @see {@link https://remixicon.com/icon/book-open-line Remix Icon Docs}
 */
export { BookOpenLine }
