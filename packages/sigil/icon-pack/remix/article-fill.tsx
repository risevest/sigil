import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArticleFill = /* @__PURE__ */ memo(function ArticleFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M7 6v4h4V6zm0 6v2h10v-2zm0 4v2h10v-2zm6-9v2h4V7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Article Fill
 * @see {@link https://remixicon.com/icon/article-fill Remix Icon Docs}
 */
export { ArticleFill }
