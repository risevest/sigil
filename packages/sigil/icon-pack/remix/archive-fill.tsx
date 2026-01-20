import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArchiveFill = /* @__PURE__ */ memo(function ArchiveFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 10h18v10.004c0 .55-.445.996-.993.996H3.993A.994.994 0 0 1 3 20.004zm6 2v2h6v-2zM2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.444.992 1v4H2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Archive Fill
 * @see {@link https://remixicon.com/icon/archive-fill Remix Icon Docs}
 */
export { ArchiveFill }
