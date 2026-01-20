import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ForwardEndLine = /* @__PURE__ */ memo(function ForwardEndLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 4a1 1 0 0 0-1 1v5.666l-9.223-6.148a.5.5 0 0 0-.777.416v5.732L1.777 4.518A.5.5 0 0 0 1 4.934v14.132a.5.5 0 0 0 .777.416L11 13.333v5.733a.5.5 0 0 0 .777.416L21 13.333V19a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1M3 7.737 9.394 12 3 16.263zm10 8.526V7.737L19.394 12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Forward End Line
 * @see {@link https://remixicon.com/icon/forward-end-line Remix Icon Docs}
 */
export { ForwardEndLine }
