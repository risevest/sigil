import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SpyFill = /* @__PURE__ */ memo(function SpyFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 13a4 4 0 0 1 0 8c-2.142 0-4-1.79-4-4h-2a4 4 0 1 1-.535-2h3.07A4 4 0 0 1 17 13M2 12v-2h2V7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v3h2v2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Spy Fill
 * @see {@link https://remixicon.com/icon/spy-fill Remix Icon Docs}
 */
export { SpyFill }
