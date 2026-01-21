import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const StackOverflowLine = /* @__PURE__ */ memo(function StackOverflowLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18.001 20.003V15h2v7.003h-16V15h2v5.003zM7.501 18v-2h9v2zm.077-4.38.347-1.97 8.864 1.563-.348 1.97zm1.634-5.504 1-1.732 7.794 4.5-1 1.732zm3.417-4.613 1.532-1.285 5.785 6.894-1.532 1.286z" />
    </Svg>
  )
})
/**
 * Remix Icon: Stack Overflow Line
 * @see {@link https://remixicon.com/icon/stack-overflow-line Remix Icon Docs}
 */
export { StackOverflowLine }
