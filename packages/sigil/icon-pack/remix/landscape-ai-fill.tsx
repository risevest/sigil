import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LandscapeAiFill = /* @__PURE__ */ memo(function LandscapeAiFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m6.213 8.628-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251m5.025 3.642L16 21h7L15 6zM14 21 8 10 2 21z" />
    </Svg>
  )
})
/**
 * Remix Icon: Landscape Ai Fill
 * @see {@link https://remixicon.com/icon/landscape-ai-fill Remix Icon Docs}
 */
export { LandscapeAiFill }
