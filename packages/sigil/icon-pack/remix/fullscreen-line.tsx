import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FullscreenLine = /* @__PURE__ */ memo(function FullscreenLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 3v2H4v4H2V3zM2 21v-6h2v4h4v2zm20 0h-6v-2h4v-4h2zm0-12h-2V5h-4V3h6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Fullscreen Line
 * @see {@link https://remixicon.com/icon/fullscreen-line Remix Icon Docs}
 */
export { FullscreenLine }
