import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 14 4 5V3h16v2l-6 9v6l-4 2z" />
    </Svg>
  )
})
Icon.displayName = 'Filter2Fill'
/**
 * Remix Icon: Filter 2 Fill
 * @see {@link https://remixicon.com/icon/filter-2-fill Remix Icon Docs}
 */
export const Filter2Fill = Icon
