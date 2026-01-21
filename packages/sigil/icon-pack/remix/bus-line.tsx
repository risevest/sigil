import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BusLine = /* @__PURE__ */ memo(function BusLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 20H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3v-8H2V8h1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3h1v4h-1v8h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm2-8V5H5v7zm0 2H5v4h14zM6 15h4v2H6zm8 0h4v2h-4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Bus Line
 * @see {@link https://remixicon.com/icon/bus-line Remix Icon Docs}
 */
export { BusLine }
