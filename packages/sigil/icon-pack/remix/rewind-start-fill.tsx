import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RewindStartFill = /* @__PURE__ */ memo(function RewindStartFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 4a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0v-5.667l9.223 6.149a.5.5 0 0 0 .777-.416v-5.733l9.223 6.149a.5.5 0 0 0 .777-.416V4.934a.5.5 0 0 0-.777-.416L13 10.666V4.934a.5.5 0 0 0-.777-.416L3 10.667V5a1 1 0 0 0-1-1" />
    </Svg>
  )
})
/**
 * Remix Icon: Rewind Start Fill
 * @see {@link https://remixicon.com/icon/rewind-start-fill Remix Icon Docs}
 */
export { RewindStartFill }
