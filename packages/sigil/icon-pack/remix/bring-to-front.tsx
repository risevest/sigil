import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BringToFront = /* @__PURE__ */ memo(function BringToFront(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 3a1 1 0 0 1 1 1v2h5a1 1 0 0 1 1 1v5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-2H7a1 1 0 0 1-1-1v-5H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5 5H8v8h8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Bring To Front
 * @see {@link https://remixicon.com/icon/bring-to-front Remix Icon Docs}
 */
export { BringToFront }
