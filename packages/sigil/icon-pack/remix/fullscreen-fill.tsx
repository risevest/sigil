import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FullscreenFill = /* @__PURE__ */ memo(function FullscreenFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 3h6v6h-2V5h-4zM2 3h6v2H4v4H2zm18 16v-4h2v6h-6v-2zM4 19h4v2H2v-6h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Fullscreen Fill
 * @see {@link https://remixicon.com/icon/fullscreen-fill Remix Icon Docs}
 */
export { FullscreenFill }
