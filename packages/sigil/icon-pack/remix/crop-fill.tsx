import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CropFill = /* @__PURE__ */ memo(function CropFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 17h3v2h-3v3h-2v-3H6a1 1 0 0 1-1-1V7H2V5h3V2h2v3h11a1 1 0 0 1 1 1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Crop Fill
 * @see {@link https://remixicon.com/icon/crop-fill Remix Icon Docs}
 */
export { CropFill }
