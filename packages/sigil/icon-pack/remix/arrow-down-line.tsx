import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowDownLine = /* @__PURE__ */ memo(function ArrowDownLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m13 16.172 5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Down Line
 * @see {@link https://remixicon.com/icon/arrow-down-line Remix Icon Docs}
 */
export { ArrowDownLine }
