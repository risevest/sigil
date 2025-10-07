import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM4 18.385 5.763 17H20V5H4zm8.018-3.685L8.659 11.34a2.25 2.25 0 0 1 3.182-3.182l.177.177.176-.177a2.25 2.25 0 0 1 3.182 3.182z" />
    </Svg>
  )
})
Icon.displayName = 'ChatHeartLine'
/**
 * Remix Icon: Chat Heart Line
 * @see {@link https://remixicon.com/icon/chat-heart-line Remix Icon Docs}
 */
export const ChatHeartLine = Icon
