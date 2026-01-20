import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RainyFill = /* @__PURE__ */ memo(function RainyFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m15.86 18-3.153-3.153a1 1 0 0 0-1.414 0L8.18 17.96A8.001 8.001 0 1 1 15.98 6.087 6 6 0 1 1 17 18zm-5.628.732L12 16.965l1.768 1.767a2.5 2.5 0 1 1-3.536 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Rainy Fill
 * @see {@link https://remixicon.com/icon/rainy-fill Remix Icon Docs}
 */
export { RainyFill }
