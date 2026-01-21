import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RidingFill = /* @__PURE__ */ memo(function RidingFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5.5 21a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m13 3a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-6.969-8.203L13 12v6h-2v-5l-2.719-2.266A2 2 0 0 1 8 7.671l2.828-2.828a2 2 0 0 1 2.829 0l1.414 1.414a6.97 6.97 0 0 0 3.917 1.975l-.01 2.015a8.96 8.96 0 0 1-5.321-2.575zM16 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Riding Fill
 * @see {@link https://remixicon.com/icon/riding-fill Remix Icon Docs}
 */
export { RidingFill }
