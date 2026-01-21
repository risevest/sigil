import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const H3 = /* @__PURE__ */ memo(function H3(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m22 8-.002 2-2.505 2.883a3.752 3.752 0 0 1-.993 7.367 3.75 3.75 0 0 1-3.682-3.033l1.964-.382a1.75 1.75 0 1 0 .924-1.895l-1.307-1.547L19.35 10H15V8zM4 4v7h7V4h2v16h-2v-7H4v7H2V4z" />
    </Svg>
  )
})
/**
 * Remix Icon: H 3
 * @see {@link https://remixicon.com/icon/h-3 Remix Icon Docs}
 */
export { H3 }
