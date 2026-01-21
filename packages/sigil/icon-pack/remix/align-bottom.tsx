import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AlignBottom = /* @__PURE__ */ memo(function AlignBottom(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 19h18v2H3zm5-6h3l-4 4-4-4h3V3h2zm10 0h3l-4 4-4-4h3V3h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Align Bottom
 * @see {@link https://remixicon.com/icon/align-bottom Remix Icon Docs}
 */
export { AlignBottom }
