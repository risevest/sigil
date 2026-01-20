import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Filter3Fill = /* @__PURE__ */ memo(function Filter3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Filter 3 Fill
 * @see {@link https://remixicon.com/icon/filter-3-fill Remix Icon Docs}
 */
export { Filter3Fill }
