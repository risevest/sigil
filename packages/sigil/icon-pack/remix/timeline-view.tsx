import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm1 16V5h16v14zM14 7H6v2h8zm4 8v2h-8v-2zm-2-4H8v2h8z" />
    </Svg>
  )
})
Icon.displayName = 'TimelineView'
/**
 * Remix Icon: Timeline View
 * @see {@link https://remixicon.com/icon/timeline-view Remix Icon Docs}
 */
export const TimelineView = Icon
