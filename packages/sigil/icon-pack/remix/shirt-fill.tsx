import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShirtFill = /* @__PURE__ */ memo(function ShirtFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.998 4v7l5-2.5 5 2.5V4h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 4-4.5-5h9zm1 3.236-1-.5-1 .5V20h2zm2 2.764v2h4v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Shirt Fill
 * @see {@link https://remixicon.com/icon/shirt-fill Remix Icon Docs}
 */
export { ShirtFill }
