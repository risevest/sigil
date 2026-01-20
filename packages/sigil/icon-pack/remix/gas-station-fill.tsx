import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GasStationFill = /* @__PURE__ */ memo(function GasStationFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 19V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 1 0 2 0v-7h-2a1 1 0 0 1-1-1V6.414l-1.657-1.657 1.414-1.414 4.95 4.95A1 1 0 0 1 22 9v9a3 3 0 1 1-6 0v-4h-2v5h1v2H2v-2zM5 5v6h7V5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Gas Station Fill
 * @see {@link https://remixicon.com/icon/gas-station-fill Remix Icon Docs}
 */
export { GasStationFill }
