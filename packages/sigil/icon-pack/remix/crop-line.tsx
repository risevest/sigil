import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CropLine = /* @__PURE__ */ memo(function CropLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 17v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v15zm2 5V7H9V5h9a1 1 0 0 1 1 1v11h3v2h-3v3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Crop Line
 * @see {@link https://remixicon.com/icon/crop-line Remix Icon Docs}
 */
export { CropLine }
