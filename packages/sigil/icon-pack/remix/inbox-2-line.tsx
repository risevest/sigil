import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Inbox2Line = /* @__PURE__ */ memo(function Inbox2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.024 3.783A1 1 0 0 1 5 3h14a1 1 0 0 1 .976.783l2 9Q22 12.89 22 13v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7a1 1 0 0 1 .024-.217zM5.802 5l-1.555 7H9a3 3 0 1 0 6 0h4.753l-1.555-7zm10.782 9a5.001 5.001 0 0 1-9.168 0H4v5h16v-5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Inbox 2 Line
 * @see {@link https://remixicon.com/icon/inbox-2-line Remix Icon Docs}
 */
export { Inbox2Line }
