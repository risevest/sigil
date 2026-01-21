import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Equalizer3Fill = /* @__PURE__ */ memo(function Equalizer3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 3v3H3v2h4v3h3V3zm5 5h9V6h-9zm5 5v3h4v2h-4v3h-3v-8zm-5 5H3v-2h9z" />
    </Svg>
  )
})
/**
 * Remix Icon: Equalizer 3 Fill
 * @see {@link https://remixicon.com/icon/equalizer-3-fill Remix Icon Docs}
 */
export { Equalizer3Fill }
