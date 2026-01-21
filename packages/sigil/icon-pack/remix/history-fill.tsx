import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HistoryFill = /* @__PURE__ */ memo(function HistoryFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.865-5.135L8 9H2V3l2.447 2.446A9.98 9.98 0 0 1 12 2m1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7z" />
    </Svg>
  )
})
/**
 * Remix Icon: History Fill
 * @see {@link https://remixicon.com/icon/history-fill Remix Icon Docs}
 */
export { HistoryFill }
