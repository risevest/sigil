import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LogoutBoxLine = /* @__PURE__ */ memo(function LogoutBoxLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2-7h7v2H6v3l-5-4 5-4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Logout Box Line
 * @see {@link https://remixicon.com/icon/logout-box-line Remix Icon Docs}
 */
export { LogoutBoxLine }
