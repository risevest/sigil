import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RidingLine = /* @__PURE__ */ memo(function RidingLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5.5 21a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m13 2a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-7.477-8.695L13 12v6h-2v-5l-2.719-2.266A2 2 0 0 1 8 7.671l2.828-2.828a2 2 0 0 1 2.829 0l1.414 1.414a6.97 6.97 0 0 0 3.917 1.975l-.01 2.015a8.96 8.96 0 0 1-5.321-2.575zM16 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Riding Line
 * @see {@link https://remixicon.com/icon/riding-line Remix Icon Docs}
 */
export { RidingLine }
