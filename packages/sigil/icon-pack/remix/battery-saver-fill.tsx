import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BatterySaverFill = /* @__PURE__ */ memo(function BatterySaverFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm-1 7h-2v3H8v2h3v3h2v-3h3v-2h-3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Battery Saver Fill
 * @see {@link https://remixicon.com/icon/battery-saver-fill Remix Icon Docs}
 */
export { BatterySaverFill }
