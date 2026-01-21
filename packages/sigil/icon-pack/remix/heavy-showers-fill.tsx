import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HeavyShowersFill = /* @__PURE__ */ memo(function HeavyShowersFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 18v5h-2v-5H9v3H7v-3.252a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18H17v3.001h-2v-3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Heavy Showers Fill
 * @see {@link https://remixicon.com/icon/heavy-showers-fill Remix Icon Docs}
 */
export { HeavyShowersFill }
