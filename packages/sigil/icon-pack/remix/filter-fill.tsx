import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 4v2h-1l-6 9v7h-4v-7L4 6H3V4z" />
    </Svg>
  )
})
Icon.displayName = 'FilterFill'
/**
 * Remix Icon: Filter Fill
 * @see {@link https://remixicon.com/icon/filter-fill Remix Icon Docs}
 */
export const FilterFill = Icon
