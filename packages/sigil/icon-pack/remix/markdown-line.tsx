import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MarkdownLine = /* @__PURE__ */ memo(function MarkdownLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm3 10.5H5v-7h2l2 2 2-2h2v7h-2v-4l-2 2-2-2zm11-3h2l-3 3-3-3h2v-4h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Markdown Line
 * @see {@link https://remixicon.com/icon/markdown-line Remix Icon Docs}
 */
export { MarkdownLine }
