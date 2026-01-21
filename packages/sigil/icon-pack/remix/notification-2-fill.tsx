import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Notification2Fill = /* @__PURE__ */ memo(function Notification2Fill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1zM9.5 21h5a2.5 2.5 0 0 1-5 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Notification 2 Fill
 * @see {@link https://remixicon.com/icon/notification-2-fill Remix Icon Docs}
 */
export { Notification2Fill }
