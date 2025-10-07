import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 3a1 1 0 0 0-.976.783l-2 9A1 1 0 0 0 2 13v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7q0-.11-.024-.217l-2-9A1 1 0 0 0 19 3zm14.753 9H15a3 3 0 1 1-6 0H4.247l1.555-7h12.396z" />
    </Svg>
  )
})
Icon.displayName = 'Inbox2Fill'
/**
 * Remix Icon: Inbox 2 Fill
 * @see {@link https://remixicon.com/icon/inbox-2-fill Remix Icon Docs}
 */
export const Inbox2Fill = Icon
