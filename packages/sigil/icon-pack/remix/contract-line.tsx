import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ContractLine = /* @__PURE__ */ memo(function ContractLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 8v4h-2V9h-5V4H5v16h6v2H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995zm-7.214 7.327c.039-.727.6-1.319 1.324-1.396l.87-.092a.5.5 0 0 0 .279-.124l.651-.585a1.48 1.48 0 0 1 1.923-.05l.682.55c.08.065.18.103.284.109l.874.047c.727.039 1.319.6 1.396 1.324l.092.87c.011.104.054.201.124.279l.585.651c.487.542.508 1.357.05 1.923l-.55.682a.5.5 0 0 0-.109.284l-.047.874a1.48 1.48 0 0 1-1.324 1.396l-.87.092a.5.5 0 0 0-.279.124l-.651.585a1.48 1.48 0 0 1-1.923.05l-.682-.55a.5.5 0 0 0-.284-.109l-.874-.047a1.48 1.48 0 0 1-1.396-1.324l-.092-.87a.5.5 0 0 0-.124-.279l-.585-.651a1.48 1.48 0 0 1-.05-1.923l.55-.682a.5.5 0 0 0 .109-.284zm7.244 1.703-1.06-1.06-2.47 2.47-1.47-1.47-1.06 1.06 2.53 2.53z" />
    </Svg>
  )
})
/**
 * Remix Icon: Contract Line
 * @see {@link https://remixicon.com/icon/contract-line Remix Icon Docs}
 */
export { ContractLine }
