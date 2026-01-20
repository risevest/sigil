import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Briefcase2Fill = /* @__PURE__ */ memo(function Briefcase2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm10 8v-3h-2v3H9v-3H7v3H4v6h16v-6zM9 3v2h6V3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Briefcase 2 Fill
 * @see {@link https://remixicon.com/icon/briefcase-2-fill Remix Icon Docs}
 */
export { Briefcase2Fill }
