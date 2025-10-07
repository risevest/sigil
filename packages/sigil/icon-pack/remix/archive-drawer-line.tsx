import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 2.992C3 2.444 3.445 2 3.993 2h16.014a1 1 0 0 1 .993.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008zM19 11V4H5v7zm0 2H5v7h14zM9 6h6v2H9zm0 9h6v2H9z" />
    </Svg>
  )
})
Icon.displayName = 'ArchiveDrawerLine'
/**
 * Remix Icon: Archive Drawer Line
 * @see {@link https://remixicon.com/icon/archive-drawer-line Remix Icon Docs}
 */
export const ArchiveDrawerLine = Icon
