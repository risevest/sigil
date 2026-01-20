import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const InkBottleFill = /* @__PURE__ */ memo(function InkBottleFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 8.997 4.371 1.748a1 1 0 0 1 .629.929v9.323a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.323a1 1 0 0 1 .629-.929L8 8.997zm4 5H8v5h12zm-4-11a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Ink Bottle Fill
 * @see {@link https://remixicon.com/icon/ink-bottle-fill Remix Icon Docs}
 */
export { InkBottleFill }
