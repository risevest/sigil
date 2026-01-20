import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FilterOffFill = /* @__PURE__ */ memo(function FilterOffFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.929.515 21.07 14.657l-1.414 1.414-3.823-3.822L14 14.999v7h-4v-7L4 6H3V4h4.585l-2.07-2.07zM21 4v2h-1l-1.915 2.872L13.213 4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Filter Off Fill
 * @see {@link https://remixicon.com/icon/filter-off-fill Remix Icon Docs}
 */
export { FilterOffFill }
