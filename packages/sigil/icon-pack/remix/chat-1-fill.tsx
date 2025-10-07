import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8" />
    </Svg>
  )
})
Icon.displayName = 'Chat1Fill'
/**
 * Remix Icon: Chat 1 Fill
 * @see {@link https://remixicon.com/icon/chat-1-fill Remix Icon Docs}
 */
export const Chat1Fill = Icon
