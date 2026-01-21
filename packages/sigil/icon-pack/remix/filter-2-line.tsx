import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Filter2Line = /* @__PURE__ */ memo(function Filter2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 14v6l-4 2v-8L4 5V3h16v2zM6.404 5 12 13.394 17.596 5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Filter 2 Line
 * @see {@link https://remixicon.com/icon/filter-2-line Remix Icon Docs}
 */
export { Filter2Line }
