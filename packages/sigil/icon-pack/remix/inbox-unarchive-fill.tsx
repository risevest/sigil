import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m20 3 2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm-8 7-4 4h3v4h2v-4h3zm6.764-5H5.236l-.999 2h15.527z" />
    </Svg>
  )
})
Icon.displayName = 'InboxUnarchiveFill'
/**
 * Remix Icon: Inbox Unarchive Fill
 * @see {@link https://remixicon.com/icon/inbox-unarchive-fill Remix Icon Docs}
 */
export const InboxUnarchiveFill = Icon
