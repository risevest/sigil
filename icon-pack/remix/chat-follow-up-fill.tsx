import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.455L2 22.5V4C2 3.44772 2.44772 3 3 3H21ZM17 7H15V15H17V7ZM11 8H9V9.999L7 10V12L9 11.999V14H11V11.999L13 12V10L11 9.999V8Z" />
    </Svg>
  )
}

Icon.displayName = 'ChatFollowUpFill'

/**
 * Remix Icon: Chat Follow Up Fill
 * @see {@link https://remixicon.com/icon/chat-follow-up-fill Remix Icon Docs}
 */
export const ChatFollowUpFill = memo(Icon)
