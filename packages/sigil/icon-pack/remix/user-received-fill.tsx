import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const UserReceivedFill = /* @__PURE__ */ memo(function UserReceivedFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m7.418 4h3.586v2h-3.586l1.829 1.828-1.414 1.415L15.59 18l4.243-4.243 1.414 1.415z" />
    </Svg>
  )
})
/**
 * Remix Icon: User Received Fill
 * @see {@link https://remixicon.com/icon/user-received-fill Remix Icon Docs}
 */
export { UserReceivedFill }
