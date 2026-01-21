import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const InboxUnarchiveLine = /* @__PURE__ */ memo(function InboxUnarchiveLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m20 3 2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm0 6H4v10h16zm-8 1 4 4h-3v4h-2v-4H8zm6.764-5H5.236l-.999 2h15.527z" />
    </Svg>
  )
})
/**
 * Remix Icon: Inbox Unarchive Line
 * @see {@link https://remixicon.com/icon/inbox-unarchive-line Remix Icon Docs}
 */
export { InboxUnarchiveLine }
