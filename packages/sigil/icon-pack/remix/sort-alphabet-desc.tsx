import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SortAlphabetDesc = /* @__PURE__ */ memo(function SortAlphabetDesc(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.869 11H2.667L6 3h2l3.333 8H9.131l-.41-1H5.28zm1.23-3h1.803L7 5.8zm15.9 0-4-5-4 5h3v13h2V8zm-11 5H3v2h4.855L3 19v2h8v-2H6.146L11 15z" />
    </Svg>
  )
})
/**
 * Remix Icon: Sort Alphabet Desc
 * @see {@link https://remixicon.com/icon/sort-alphabet-desc Remix Icon Docs}
 */
export { SortAlphabetDesc }
