import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 11V5H5v6zm0 2H5v6h14zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
    </Svg>
  )
})
Icon.displayName = 'LayoutRowLine'
/**
 * Remix Icon: Layout Row Line
 * @see {@link https://remixicon.com/icon/layout-row-line Remix Icon Docs}
 */
export const LayoutRowLine = Icon
