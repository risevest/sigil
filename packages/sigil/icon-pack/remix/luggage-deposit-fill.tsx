import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LuggageDepositFill = /* @__PURE__ */ memo(function LuggageDepositFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 3a1 1 0 0 1 1 1v2h4a1 1 0 0 1 1 1v12h2v2H1v-2h2V7a1 1 0 0 1 1-1h4V4a1 1 0 0 1 1-1zm-5 5H8v11h2zm6 0h-2v11h2zm-2-3h-4v1h4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Luggage Deposit Fill
 * @see {@link https://remixicon.com/icon/luggage-deposit-fill Remix Icon Docs}
 */
export { LuggageDepositFill }
