import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Briefcase4Line = /* @__PURE__ */ memo(function Briefcase4Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm2 8H4v6h16v-6h-5v3H9zm11-6H4v4h5V9h6v2h5zm-9 4v3h2v-3zM9 3v2h6V3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Briefcase 4 Line
 * @see {@link https://remixicon.com/icon/briefcase-4-line Remix Icon Docs}
 */
export { Briefcase4Line }
