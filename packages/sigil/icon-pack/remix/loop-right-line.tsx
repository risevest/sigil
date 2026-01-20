import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LoopRightLine = /* @__PURE__ */ memo(function LoopRightLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 4a7.99 7.99 0 0 1 6.616 3.5H16v2h6v-6h-2V6a9.98 9.98 0 0 0-8-4C6.477 2 2 6.477 2 12h2a8 8 0 0 1 8-8m8 8a8 8 0 0 1-14.616 4.5H8v-2H2v6h2V18a9.98 9.98 0 0 0 8 4c5.523 0 10-4.477 10-10z" />
    </Svg>
  )
})
/**
 * Remix Icon: Loop Right Line
 * @see {@link https://remixicon.com/icon/loop-right-line Remix Icon Docs}
 */
export { LoopRightLine }
