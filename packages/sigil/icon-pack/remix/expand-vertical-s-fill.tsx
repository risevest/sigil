import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16.95 7.45 12 2.5 7.051 7.447H11v9.103H7.05L12 21.5l4.95-4.95H13V7.448z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandVerticalSFill'
/**
 * Remix Icon: Expand Vertical S Fill
 * @see {@link https://remixicon.com/icon/expand-vertical-s-fill Remix Icon Docs}
 */
export const ExpandVerticalSFill = Icon
