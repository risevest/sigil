import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CopperDiamondFill = /* @__PURE__ */ memo(function CopperDiamondFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m-2.5-13-2.5 2.5 5 5 5-5-2.5-2.5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Copper Diamond Fill
 * @see {@link https://remixicon.com/icon/copper-diamond-fill Remix Icon Docs}
 */
export { CopperDiamondFill }
