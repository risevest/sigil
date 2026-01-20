import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const IndentDecrease = /* @__PURE__ */ memo(function IndentDecrease(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 4h18v2H3zm0 15h18v2H3zm8-5h10v2H11zm0-5h10v2H11zm-8 3.5L7 9v7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Indent Decrease
 * @see {@link https://remixicon.com/icon/indent-decrease Remix Icon Docs}
 */
export { IndentDecrease }
