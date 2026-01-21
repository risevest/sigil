import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Subscript2 = /* @__PURE__ */ memo(function Subscript2(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 6v13H9V6H3V4h14v2zm8.55 10.58a.8.8 0 1 0-1.32-.36l-1.154.33A2.001 2.001 0 1 1 21 16c0 .573-.24 1.09-.626 1.454L18.744 19H21v1h-4v-1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Subscript 2
 * @see {@link https://remixicon.com/icon/subscript-2 Remix Icon Docs}
 */
export { Subscript2 }
