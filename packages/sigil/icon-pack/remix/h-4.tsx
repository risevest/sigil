import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const H4 = /* @__PURE__ */ memo(function H4(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2zm9-12v8h1.5v2H22v2h-2v-2h-5.5v-1.34l5-8.66zm-2 3.133L17.19 16H20z" />
    </Svg>
  )
})
/**
 * Remix Icon: H 4
 * @see {@link https://remixicon.com/icon/h-4 Remix Icon Docs}
 */
export { H4 }
