import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HistoryLine = /* @__PURE__ */ memo(function HistoryLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.385-4.5H8v2H2v-6h2V6a9.99 9.99 0 0 1 8-4m1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7z" />
    </Svg>
  )
})
/**
 * Remix Icon: History Line
 * @see {@link https://remixicon.com/icon/history-line Remix Icon Docs}
 */
export { HistoryLine }
