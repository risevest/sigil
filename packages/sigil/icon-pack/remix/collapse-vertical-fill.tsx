import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 13.5 4.95 4.95-3.95-.002V23h-2v-4.552l-3.948-.001zM11 1v4.55H7.05L12 10.5l4.95-4.95H13V1z" />
    </Svg>
  )
})
Icon.displayName = 'CollapseVerticalFill'
/**
 * Remix Icon: Collapse Vertical Fill
 * @see {@link https://remixicon.com/icon/collapse-vertical-fill Remix Icon Docs}
 */
export const CollapseVerticalFill = Icon
