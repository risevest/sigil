import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const H2 = /* @__PURE__ */ memo(function H2(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 4v7h7V4h2v16h-2v-7H4v7H2V4zm14.5 4a3.75 3.75 0 0 1 2.978 6.03l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546a1.75 1.75 0 1 0-3.065-1.292l-.005.144h-2A3.75 3.75 0 0 1 18.5 8" />
    </Svg>
  )
})
/**
 * Remix Icon: H 2
 * @see {@link https://remixicon.com/icon/h-2 Remix Icon Docs}
 */
export { H2 }
