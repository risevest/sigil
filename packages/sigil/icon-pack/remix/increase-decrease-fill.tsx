import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const IncreaseDecreaseFill = /* @__PURE__ */ memo(function IncreaseDecreaseFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m6 8v-2h-2v2h-2v2h2v2h2v-2h2v-2zm4 0v2h6v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Increase Decrease Fill
 * @see {@link https://remixicon.com/icon/increase-decrease-fill Remix Icon Docs}
 */
export { IncreaseDecreaseFill }
