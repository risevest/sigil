import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ResetLeftLine = /* @__PURE__ */ memo(function ResetLeftLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2v2a8 8 0 1 0 4.5 1.385V8h-2V2h6v2H18a9.99 9.99 0 0 1 4 8" />
    </Svg>
  )
})
/**
 * Remix Icon: Reset Left Line
 * @see {@link https://remixicon.com/icon/reset-left-line Remix Icon Docs}
 */
export { ResetLeftLine }
