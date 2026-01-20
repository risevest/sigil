import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FriendicaFill = /* @__PURE__ */ memo(function FriendicaFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 3v4.5H9v4h6v5H9V21h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Friendica Fill
 * @see {@link https://remixicon.com/icon/friendica-fill Remix Icon Docs}
 */
export { FriendicaFill }
