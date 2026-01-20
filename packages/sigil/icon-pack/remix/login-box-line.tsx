import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LoginBoxLine = /* @__PURE__ */ memo(function LoginBoxLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm6-4V8l5 4-5 4v-3H2v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Login Box Line
 * @see {@link https://remixicon.com/icon/login-box-line Remix Icon Docs}
 */
export { LoginBoxLine }
