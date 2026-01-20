import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Notification3Fill = /* @__PURE__ */ memo(function Notification3Fill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0zM9 21h6v2H9z" />
    </Svg>
  )
})
/**
 * Remix Icon: Notification 3 Fill
 * @see {@link https://remixicon.com/icon/notification-3-fill Remix Icon Docs}
 */
export { Notification3Fill }
