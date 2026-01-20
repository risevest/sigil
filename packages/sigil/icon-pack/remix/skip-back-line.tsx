import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SkipBackLine = /* @__PURE__ */ memo(function SkipBackLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 4a1 1 0 0 1 1 1v6.333l10.223-6.815a.5.5 0 0 1 .777.416v14.132a.5.5 0 0 1-.777.416L8 12.667V19a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m10 3.737L10.606 12 17 16.263z" />
    </Svg>
  )
})
/**
 * Remix Icon: Skip Back Line
 * @see {@link https://remixicon.com/icon/skip-back-line Remix Icon Docs}
 */
export { SkipBackLine }
