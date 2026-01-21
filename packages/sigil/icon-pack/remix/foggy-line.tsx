import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FoggyLine = /* @__PURE__ */ memo(function FoggyLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M1.584 13.007a8 8 0 1 1 14.873-5.908 5.5 5.5 0 0 1 6.52 5.908h-2.013Q21 12.758 21 12.5a3.5 3.5 0 0 0-6-2.45V10a6 6 0 1 0-11.193 3.007zM4 19h17v2H4zm-2-4h21v2H2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Foggy Line
 * @see {@link https://remixicon.com/icon/foggy-line Remix Icon Docs}
 */
export { FoggyLine }
