import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.45 7.05 2.5 12l4.947 4.947L7.448 13h9.102v3.95L21.5 12l-4.95-4.95V11H7.45z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandHorizontalSFill'
/**
 * Remix Icon: Expand Horizontal S Fill
 * @see {@link https://remixicon.com/icon/expand-horizontal-s-fill Remix Icon Docs}
 */
export const ExpandHorizontalSFill = Icon
