import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const StackshareLine = /* @__PURE__ */ memo(function StackshareLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9.537 13H7.33a3.001 3.001 0 0 1-5.829-1 3 3 0 0 1 5.83-1h2.206l3.464-6h3.17a3.001 3.001 0 0 1 5.83 1 3 3 0 0 1-5.829 1h-2.017l-2.886 4.999L14.156 17h2.016A3.001 3.001 0 0 1 22 18a3 3 0 0 1-5.829 1h-3.171zm9.464 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-14.5-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m14.5-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </Svg>
  )
})
/**
 * Remix Icon: Stackshare Line
 * @see {@link https://remixicon.com/icon/stackshare-line Remix Icon Docs}
 */
export { StackshareLine }
