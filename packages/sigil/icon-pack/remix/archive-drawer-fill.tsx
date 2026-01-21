import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArchiveDrawerFill = /* @__PURE__ */ memo(function ArchiveDrawerFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 13h18v8.003c0 .55-.445.997-.993.997H3.993A.995.995 0 0 1 3 21.003zM3 2.998C3 2.447 3.445 2 3.993 2h16.014c.548 0 .993.446.993.998V11H3zM9 5v2h6V5zm0 11v2h6v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Archive Drawer Fill
 * @see {@link https://remixicon.com/icon/archive-drawer-fill Remix Icon Docs}
 */
export { ArchiveDrawerFill }
