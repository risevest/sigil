import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BarcodeLine = /* @__PURE__ */ memo(function BarcodeLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 4h2v16H2zm4 0h1v16H6zm2 0h2v16H8zm3 0h2v16h-2zm3 0h2v16h-2zm3 0h1v16h-1zm2 0h3v16h-3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Barcode Line
 * @see {@link https://remixicon.com/icon/barcode-line Remix Icon Docs}
 */
export { BarcodeLine }
