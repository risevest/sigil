import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m20 3 2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm0 6H4v10h16zm-7 1v4h3l-4 4-4-4h3v-4zm5.764-5H5.237l-1 2h15.527z" />
    </Svg>
  )
})
Icon.displayName = 'InboxArchiveLine'
/**
 * Remix Icon: Inbox Archive Line
 * @see {@link https://remixicon.com/icon/inbox-archive-line Remix Icon Docs}
 */
export const InboxArchiveLine = Icon
