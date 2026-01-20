import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PresentationFill = /* @__PURE__ */ memo(function PresentationFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M5 16v6H3V10a3 3 0 0 1 5.106-2.137l2.374 2.243 2.313-2.313 1.414 1.414-3.687 3.687L9 11.46V22H7v-6zm5-11h9v9h-9v2h4.365l2.824 6h2.21l-2.823-6H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H10z" />
    </Svg>
  )
})
/**
 * Remix Icon: Presentation Fill
 * @see {@link https://remixicon.com/icon/presentation-fill Remix Icon Docs}
 */
export { PresentationFill }
