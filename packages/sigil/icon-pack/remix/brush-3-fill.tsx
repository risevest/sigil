import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Brush3Fill = /* @__PURE__ */ memo(function Brush3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 10.997v-3h-6v-4h-4v4H4v3zm1 2v8a1 1 0 0 1-1 1H10v-6H8v6H4a1 1 0 0 1-1-1v-8H2v-6a1 1 0 0 1 1-1h5v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h5a1 1 0 0 1 1 1v6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Brush 3 Fill
 * @see {@link https://remixicon.com/icon/brush-3-fill Remix Icon Docs}
 */
export { Brush3Fill }
