import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const IncreaseDecreaseLine = /* @__PURE__ */ memo(function IncreaseDecreaseLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m1 2v14h16v-14zm5 6h2v2h-2v2h-2v-2h-2v-2h2v-2h2zm4 0h6v2h-6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Increase Decrease Line
 * @see {@link https://remixicon.com/icon/increase-decrease-line Remix Icon Docs}
 */
export { IncreaseDecreaseLine }
