import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DoorOpenFill = /* @__PURE__ */ memo(function DoorOpenFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M1.998 21v-2h2V4.835a1 1 0 0 1 .821-.984l9.472-1.722a.6.6 0 0 1 .707.59v1.28l4 .001a1 1 0 0 1 1 1v14h2v2h-4V6h-3v15zm10-10h-2v2h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Door Open Fill
 * @see {@link https://remixicon.com/icon/door-open-fill Remix Icon Docs}
 */
export { DoorOpenFill }
