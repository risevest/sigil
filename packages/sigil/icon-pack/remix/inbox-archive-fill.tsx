import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004zm9 11v-4h-2v4H8l4 4 4-4zm6.764-7-1-2H5.237l-1 2z" />
    </Svg>
  )
})
Icon.displayName = 'InboxArchiveFill'
/**
 * Remix Icon: Inbox Archive Fill
 * @see {@link https://remixicon.com/icon/inbox-archive-fill Remix Icon Docs}
 */
export const InboxArchiveFill = Icon
