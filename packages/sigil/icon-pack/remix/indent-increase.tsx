import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const IndentIncrease = /* @__PURE__ */ memo(function IndentIncrease(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 4h18v2H3zm0 15h18v2H3zm8-5h10v2H11zm0-5h10v2H11zm-4 3.5L3 16V9z" />
    </Svg>
  )
})
/**
 * Remix Icon: Indent Increase
 * @see {@link https://remixicon.com/icon/indent-increase Remix Icon Docs}
 */
export { IndentIncrease }
