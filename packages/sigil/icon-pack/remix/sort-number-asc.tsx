import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SortNumberAsc = /* @__PURE__ */ memo(function SortNumberAsc(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 3v8H7V5.41l-2 .539v-2.33L7.313 3zm10 0v13h3l-4 5-4-5h3V3zm-8 12.5c0 .564-.156 1.093-.427 1.544L8.289 21h-2.31l1.473-2.55A3.001 3.001 0 1 1 11 15.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </Svg>
  )
})
/**
 * Remix Icon: Sort Number Asc
 * @see {@link https://remixicon.com/icon/sort-number-asc Remix Icon Docs}
 */
export { SortNumberAsc }
