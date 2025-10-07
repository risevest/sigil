import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m.5 12 4.95-4.95L5.449 11H10v2H5.448v3.947zM14 13h4.55v3.95L23.5 12l-4.95-4.95V11H14z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandHorizontalFill'
/**
 * Remix Icon: Expand Horizontal Fill
 * @see {@link https://remixicon.com/icon/expand-horizontal-fill Remix Icon Docs}
 */
export const ExpandHorizontalFill = Icon
