import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LoopRightFill = /* @__PURE__ */ memo(function LoopRightFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 4c2.59 0 4.894 1.23 6.357 3.143L16 9.5h6v-6l-2.219 2.219A9.98 9.98 0 0 0 12 2C6.477 2 2 6.477 2 12h2a8 8 0 0 1 8-8m8 8a8 8 0 0 1-14.357 4.857L8 14.5H2v6l2.219-2.219A9.98 9.98 0 0 0 12 22c5.523 0 10-4.477 10-10z" />
    </Svg>
  )
})
/**
 * Remix Icon: Loop Right Fill
 * @see {@link https://remixicon.com/icon/loop-right-fill Remix Icon Docs}
 */
export { LoopRightFill }
