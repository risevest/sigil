import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BusFill = /* @__PURE__ */ memo(function BusFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 20H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3v-8H2V8h1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3h1v4h-1v8h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM5 5v9h14V5zm0 11v2h4v-2zm10 0v2h4v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Bus Fill
 * @see {@link https://remixicon.com/icon/bus-fill Remix Icon Docs}
 */
export { BusFill }
