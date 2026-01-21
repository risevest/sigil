import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const User2Fill = /* @__PURE__ */ memo(function User2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8 8 0 0 1 7-7.938M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6" />
    </Svg>
  )
})
/**
 * Remix Icon: User 2 Fill
 * @see {@link https://remixicon.com/icon/user-2-fill Remix Icon Docs}
 */
export { User2Fill }
