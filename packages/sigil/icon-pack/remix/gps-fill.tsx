import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GpsFill = /* @__PURE__ */ memo(function GpsFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 16 3 6H9zm-2.627.255a5 5 0 1 1 5.255 0l-1.356-2.711a2 2 0 1 0-2.544 0zm-2.241 4.482A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-5.131 8.737l-1.344-2.688a7 7 0 1 0-7.05 0z" />
    </Svg>
  )
})
/**
 * Remix Icon: Gps Fill
 * @see {@link https://remixicon.com/icon/gps-fill Remix Icon Docs}
 */
export { GpsFill }
