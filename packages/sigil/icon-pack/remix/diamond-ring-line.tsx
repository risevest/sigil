import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DiamondRingLine = /* @__PURE__ */ memo(function DiamondRingLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9.465 1 7.69 3.661l1.865 1.696a8.5 8.5 0 1 0 4.889 0l1.864-1.696L14.535 1zM12 7a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m-1.69-3.661L10.534 3h2.93l.226.339L12 4.876z" />
    </Svg>
  )
})
/**
 * Remix Icon: Diamond Ring Line
 * @see {@link https://remixicon.com/icon/diamond-ring-line Remix Icon Docs}
 */
export { DiamondRingLine }
