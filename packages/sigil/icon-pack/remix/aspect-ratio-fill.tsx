import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AspectRatioFill = /* @__PURE__ */ memo(function AspectRatioFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-3 9h-2v3h-3v2h5zm-7-5H6v5h2V9h3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Aspect Ratio Fill
 * @see {@link https://remixicon.com/icon/aspect-ratio-fill Remix Icon Docs}
 */
export { AspectRatioFill }
