import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArchiveStackLine = /* @__PURE__ */ memo(function ArchiveStackLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 5h16V3H4zm16 4H4V7h16zM3 11h7v2h4v-2h7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm13 2v2H8v-2H5v6h14v-6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Archive Stack Line
 * @see {@link https://remixicon.com/icon/archive-stack-line Remix Icon Docs}
 */
export { ArchiveStackLine }
