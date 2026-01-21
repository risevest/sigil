import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BatterySaverLine = /* @__PURE__ */ memo(function BatterySaverLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm-1 2h-2v2H7v14h10V6h-4zm0 5v3h3v2h-3v3h-2v-3H8v-2h3V9z" />
    </Svg>
  )
})
/**
 * Remix Icon: Battery Saver Line
 * @see {@link https://remixicon.com/icon/battery-saver-line Remix Icon Docs}
 */
export { BatterySaverLine }
