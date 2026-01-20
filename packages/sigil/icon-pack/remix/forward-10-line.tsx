import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Forward10Line = /* @__PURE__ */ memo(function Forward10Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10h-2a8 8 0 1 1-1.384-4.5H16v1.25a2.5 2.5 0 0 0-4 2v2.5a2.5 2.5 0 0 0 5 0v-2.5c0-.455-.122-.882-.334-1.25H22v-6h-2V6a9.99 9.99 0 0 0-8-4m3.5 8.75v2.5a1 1 0 1 1-2 0v-2.5a1 1 0 1 1 2 0M10 8.5H8.5v7H10z" />
    </Svg>
  )
})
/**
 * Remix Icon: Forward 10 Line
 * @see {@link https://remixicon.com/icon/forward-10-line Remix Icon Docs}
 */
export { Forward10Line }
