import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Store3Fill = /* @__PURE__ */ memo(function Store3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7H2v-2l1-5h18l1 5v2zM5 13v6h14v-6zm1 1h8v3H6zM3 3h18v2H3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Store 3 Fill
 * @see {@link https://remixicon.com/icon/store-3-fill Remix Icon Docs}
 */
export { Store3Fill }
