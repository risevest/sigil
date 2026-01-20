import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RewindStartMiniFill = /* @__PURE__ */ memo(function RewindStartMiniFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1m9.909 11.323a.5.5 0 0 0 .091-.288V6.965a.5.5 0 0 0-.788-.409l-7.133 5.035a.5.5 0 0 0 0 .817l7.133 5.035a.5.5 0 0 0 .697-.12m1.05-5.035a.5.5 0 0 0 .12.12l7.133 5.035a.5.5 0 0 0 .788-.408V6.965a.5.5 0 0 0-.788-.409l-7.133 5.035a.5.5 0 0 0-.12.697" />
    </Svg>
  )
})
/**
 * Remix Icon: Rewind Start Mini Fill
 * @see {@link https://remixicon.com/icon/rewind-start-mini-fill Remix Icon Docs}
 */
export { RewindStartMiniFill }
