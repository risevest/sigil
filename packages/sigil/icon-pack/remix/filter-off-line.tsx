import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.929.515 21.07 14.657l-1.414 1.414-3.823-3.822-.834 1.25V22H9v-8.5L4 6H3V4h4.585l-2.07-2.07zM9.585 6H6.404L11 12.894V20h2v-7.106l1.392-2.087zM21 4v2h-1l-1.915 2.872-1.442-1.443.953-1.43h-2.383l-2-2z" />
    </Svg>
  )
})
Icon.displayName = 'FilterOffLine'
/**
 * Remix Icon: Filter Off Line
 * @see {@link https://remixicon.com/icon/filter-off-line Remix Icon Docs}
 */
export const FilterOffLine = Icon
