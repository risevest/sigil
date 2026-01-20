import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Search2Fill = /* @__PURE__ */ memo(function Search2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9m8.485 16.071 2.829 2.828-1.415 1.415-2.828-2.829z" />
    </Svg>
  )
})
/**
 * Remix Icon: Search 2 Fill
 * @see {@link https://remixicon.com/icon/search-2-fill Remix Icon Docs}
 */
export { Search2Fill }
