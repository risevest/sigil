import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SortDesc = /* @__PURE__ */ memo(function SortDesc(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 4v12h3l-4 5-4-5h3V4zm-8 14v2H3v-2zm2-7v2H3v-2zm0-7v2H3V4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Sort Desc
 * @see {@link https://remixicon.com/icon/sort-desc Remix Icon Docs}
 */
export { SortDesc }
