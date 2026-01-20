import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Bug2Line = /* @__PURE__ */ memo(function Bug2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10.562 4.148a7 7 0 0 1 2.876 0l1.683-1.684 1.414 1.415-1.05 1.05A7.03 7.03 0 0 1 18.327 8H21v2h-2.07q.07.49.07 1v1h2v2h-2v1q0 .51-.07 1H21v2h-2.674a7 7 0 0 1-12.652 0H3v-2h2.07A7 7 0 0 1 5 15v-1H3v-2h2v-1q0-.51.07-1H3V8h2.674a7.03 7.03 0 0 1 2.84-3.072l-1.05-1.05L8.88 2.465zM12 6a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0v-4a5 5 0 0 0-5-5m-3 8h6v2H9zm0-4h6v2H9z" />
    </Svg>
  )
})
/**
 * Remix Icon: Bug 2 Line
 * @see {@link https://remixicon.com/icon/bug-2-line Remix Icon Docs}
 */
export { Bug2Line }
