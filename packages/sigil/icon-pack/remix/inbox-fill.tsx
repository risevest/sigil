import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const InboxFill = /* @__PURE__ */ memo(function InboxFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m6 9a3 3 0 1 0 6 0h5V5H4v7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Inbox Fill
 * @see {@link https://remixicon.com/icon/inbox-fill Remix Icon Docs}
 */
export { InboxFill }
