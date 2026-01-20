import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Notification4Fill = /* @__PURE__ */ memo(function Notification4Fill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m20 18.667.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0zM9.5 21h5a2.5 2.5 0 0 1-5 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Notification 4 Fill
 * @see {@link https://remixicon.com/icon/notification-4-fill Remix Icon Docs}
 */
export { Notification4Fill }
