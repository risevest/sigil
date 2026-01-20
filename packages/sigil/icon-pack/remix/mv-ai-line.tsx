import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MvAiLine = /* @__PURE__ */ memo(function MvAiLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m20.467 8.694.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M2 4a1 1 0 0 1 1-1h11v2H4v14h16v-8h2v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm10 8.17V6h4v2h-2v7a3 3 0 1 1-2-2.83" />
    </Svg>
  )
})
/**
 * Remix Icon: Mv Ai Line
 * @see {@link https://remixicon.com/icon/mv-ai-line Remix Icon Docs}
 */
export { MvAiLine }
