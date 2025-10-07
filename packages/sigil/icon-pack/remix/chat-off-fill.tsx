import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m2.808 1.393 19.799 19.8-1.415 1.414-3.607-3.608L6.455 19 2 22.5V4c0-.17.042-.329.116-.469l-.722-.723zM21 3a1 1 0 0 1 1 1v13.785L7.214 3z" />
    </Svg>
  )
})
Icon.displayName = 'ChatOffFill'
/**
 * Remix Icon: Chat Off Fill
 * @see {@link https://remixicon.com/icon/chat-off-fill Remix Icon Docs}
 */
export const ChatOffFill = Icon
