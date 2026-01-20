import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Replay10Fill = /* @__PURE__ */ memo(function Replay10Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.865-5.135L8 9H2V3l2.447 2.446A9.98 9.98 0 0 1 12 2m2.5 6.25a2.5 2.5 0 0 0-2.5 2.5v2.5a2.5 2.5 0 0 0 5 0v-2.5a2.5 2.5 0 0 0-2.5-2.5m1 2.5v2.5a1 1 0 1 1-2 0v-2.5a1 1 0 1 1 2 0M10 8.5H8.5v7H10z" />
    </Svg>
  )
})
/**
 * Remix Icon: Replay 10 Fill
 * @see {@link https://remixicon.com/icon/replay-10-fill Remix Icon Docs}
 */
export { Replay10Fill }
