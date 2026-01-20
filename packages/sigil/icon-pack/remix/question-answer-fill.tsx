import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const QuestionAnswerFill = /* @__PURE__ */ memo(function QuestionAnswerFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 18h10.237L20 19.385V9h1a1 1 0 0 1 1 1v13.5L17.546 20H9a1 1 0 0 1-1-1zm-2.545-2L1 19.5V4a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Question Answer Fill
 * @see {@link https://remixicon.com/icon/question-answer-fill Remix Icon Docs}
 */
export { QuestionAnswerFill }
