import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AnthropicFill = /* @__PURE__ */ memo(function AnthropicFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16.765 5h-3.308l5.923 15h3.23zM7.226 5 1.38 20h3.308l1.307-3.154h6.154l1.23 3.077h3.309L10.688 5H7.226m-.308 9.077 2-5.308 2.077 5.308H6.918" />
    </Svg>
  )
})
/**
 * Remix Icon: Anthropic Fill
 * @see {@link https://remixicon.com/icon/anthropic-fill Remix Icon Docs}
 */
export { AnthropicFill }
