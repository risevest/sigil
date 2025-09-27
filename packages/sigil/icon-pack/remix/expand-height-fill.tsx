import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18 2H6v2h12zm-1.05 7.45L12 4.5 7.053 9.447 11 9.448v5.102H7.05L12 19.5l4.95-4.95H13V9.45zM18 20v2H6v-2z" />
    </Svg>
  )
})
Icon.displayName = 'ExpandHeightFill'
/**
 * Remix Icon: Expand Height Fill
 * @see {@link https://remixicon.com/icon/expand-height-fill Remix Icon Docs}
 */
export const ExpandHeightFill = Icon
