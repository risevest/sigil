import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BookletFill = /* @__PURE__ */ memo(function BookletFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 2v20H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2zm12.005 0C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H10V2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Booklet Fill
 * @see {@link https://remixicon.com/icon/booklet-fill Remix Icon Docs}
 */
export { BookletFill }
