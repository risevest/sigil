import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FeedbackFill = /* @__PURE__ */ memo(function FeedbackFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM11 13v2h2v-2zm0-6v5h2V7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Feedback Fill
 * @see {@link https://remixicon.com/icon/feedback-fill Remix Icon Docs}
 */
export { FeedbackFill }
