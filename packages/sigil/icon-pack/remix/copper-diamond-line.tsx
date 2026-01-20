import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CopperDiamondLine = /* @__PURE__ */ memo(function CopperDiamondLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-3-12h6l2.5 3.5-5.5 5.5-5.5-5.5zm1.03 2-.92 1.29 2.89 2.89 2.89-2.89-.92-1.29z" />
    </Svg>
  )
})
/**
 * Remix Icon: Copper Diamond Line
 * @see {@link https://remixicon.com/icon/copper-diamond-line Remix Icon Docs}
 */
export { CopperDiamondLine }
