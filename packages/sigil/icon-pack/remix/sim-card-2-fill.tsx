import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SimCard2Fill = /* @__PURE__ */ memo(function SimCard2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m8 16v-8H8v2h3v6zm-5-5v2h2v-2zm6 0v2h2v-2zm0-3v2h2v-2zm-6 6v2h2v-2zm6 0v2h2v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Sim Card 2 Fill
 * @see {@link https://remixicon.com/icon/sim-card-2-fill Remix Icon Docs}
 */
export { SimCard2Fill }
