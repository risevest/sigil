import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Message3Fill = /* @__PURE__ */ memo(function Message3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994zM14 11v2h2v-2zm-6 0v2h2v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Message 3 Fill
 * @see {@link https://remixicon.com/icon/message-3-fill Remix Icon Docs}
 */
export { Message3Fill }
