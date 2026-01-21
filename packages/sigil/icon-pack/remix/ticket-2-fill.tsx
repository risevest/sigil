import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Ticket2Fill = /* @__PURE__ */ memo(function Ticket2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21.005 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 0 0 0-5V4a1 1 0 0 1 1-1zm-5 6h-8v6h8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Ticket 2 Fill
 * @see {@link https://remixicon.com/icon/ticket-2-fill Remix Icon Docs}
 */
export { Ticket2Fill }
