import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FilterLine = /* @__PURE__ */ memo(function FilterLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 4v2h-1l-5 7.5V22H9v-8.5L4 6H3V4zM6.404 6 11 12.894V20h2v-7.106L17.596 6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Filter Line
 * @see {@link https://remixicon.com/icon/filter-line Remix Icon Docs}
 */
export { FilterLine }
