import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DiamondRingFill = /* @__PURE__ */ memo(function DiamondRingFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14.535 1h-5.07L7.69 3.661l1.865 1.696a8.5 8.5 0 1 0 4.888 0L16.31 3.66zM12 7a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13" />
    </Svg>
  )
})
/**
 * Remix Icon: Diamond Ring Fill
 * @see {@link https://remixicon.com/icon/diamond-ring-fill Remix Icon Docs}
 */
export { DiamondRingFill }
