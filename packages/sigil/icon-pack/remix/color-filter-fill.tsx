import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16.572 8.027a5 5 0 1 0-5.101 2.945 7 7 0 0 1 5.1-2.945m-3.418 9.92a7 7 0 0 0 0-5.892 5 5 0 1 1 0 5.89m-6.88-7.92a7 7 0 0 0 5.1 2.946 5 5 0 1 1-5.1-2.946" />
    </Svg>
  )
})
Icon.displayName = 'ColorFilterFill'
/**
 * Remix Icon: Color Filter Fill
 * @see {@link https://remixicon.com/icon/color-filter-fill Remix Icon Docs}
 */
export const ColorFilterFill = Icon
