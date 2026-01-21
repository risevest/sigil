import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const EmotionUnhappyLine = /* @__PURE__ */ memo(function EmotionUnhappyLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-5-3a5 5 0 0 1 10 0h-2a3 3 0 1 0-6 0zm1-6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </Svg>
  )
})
/**
 * Remix Icon: Emotion Unhappy Line
 * @see {@link https://remixicon.com/icon/emotion-unhappy-line Remix Icon Docs}
 */
export { EmotionUnhappyLine }
