import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RewindStartMiniLine = /* @__PURE__ */ memo(function RewindStartMiniLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1m4.968 6L11 9.86v4.28zm4.244 5.443a.5.5 0 0 0 .788-.408V6.965a.5.5 0 0 0-.788-.409l-7.133 5.035a.5.5 0 0 0 0 .817zM16.968 12 20 9.86v4.28zm-3.01.288a.5.5 0 0 0 .12.12l7.134 5.035a.5.5 0 0 0 .788-.408V6.965a.5.5 0 0 0-.788-.409l-7.133 5.035a.5.5 0 0 0-.12.697" />
    </Svg>
  )
})
/**
 * Remix Icon: Rewind Start Mini Line
 * @see {@link https://remixicon.com/icon/rewind-start-mini-line Remix Icon Docs}
 */
export { RewindStartMiniLine }
