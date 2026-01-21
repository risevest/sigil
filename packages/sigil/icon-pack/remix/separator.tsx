import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Separator = /* @__PURE__ */ memo(function Separator(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 11h2v2H2zm4 0h12v2H6zm14 0h2v2h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Separator
 * @see {@link https://remixicon.com/icon/separator Remix Icon Docs}
 */
export { Separator }
