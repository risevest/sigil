import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const User4Line = /* @__PURE__ */ memo(function User4Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 20h14v2H5zm7-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16m0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12" />
    </Svg>
  )
})
/**
 * Remix Icon: User 4 Line
 * @see {@link https://remixicon.com/icon/user-4-line Remix Icon Docs}
 */
export { User4Line }
