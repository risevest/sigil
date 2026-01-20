import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SendPlane2Fill = /* @__PURE__ */ memo(function SendPlane2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.439l18.462 10.155a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154z" />
    </Svg>
  )
})
/**
 * Remix Icon: Send Plane 2 Fill
 * @see {@link https://remixicon.com/icon/send-plane-2-fill Remix Icon Docs}
 */
export { SendPlane2Fill }
