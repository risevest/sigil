import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Artboard2Fill = /* @__PURE__ */ memo(function Artboard2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 6h12v12H6zm0-4h2v3H6zm0 17h2v3H6zM2 6h3v2H2zm0 10h3v2H2zM19 6h3v2h-3zm0 10h3v2h-3zM16 2h2v3h-2zm0 17h2v3h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Artboard 2 Fill
 * @see {@link https://remixicon.com/icon/artboard-2-fill Remix Icon Docs}
 */
export { Artboard2Fill }
