import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LogoutBoxFill = /* @__PURE__ */ memo(function LogoutBoxFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m4 9V8l-5 4 5 4v-3h6v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Logout Box Fill
 * @see {@link https://remixicon.com/icon/logout-box-fill Remix Icon Docs}
 */
export { LogoutBoxFill }
