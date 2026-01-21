import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SortAsc = /* @__PURE__ */ memo(function SortAsc(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m19 3 4 5h-3v12h-2V8h-3zm-5 15v2H3v-2zm0-7v2H3v-2zm-2-7v2H3V4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Sort Asc
 * @see {@link https://remixicon.com/icon/sort-asc Remix Icon Docs}
 */
export { SortAsc }
