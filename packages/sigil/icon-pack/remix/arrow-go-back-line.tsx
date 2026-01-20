import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowGoBackLine = /* @__PURE__ */ memo(function ArrowGoBackLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m5.828 7 2.536 2.535L6.95 10.95 2 6l4.95-4.95 1.414 1.415L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 0 0 0-12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Go Back Line
 * @see {@link https://remixicon.com/icon/arrow-go-back-line Remix Icon Docs}
 */
export { ArrowGoBackLine }
