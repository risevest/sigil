import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowTurnBackLine = /* @__PURE__ */ memo(function ArrowTurnBackLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17 18.172-2.535-2.536-1.414 1.414L18 22l4.95-4.95-1.415-1.414L19 18.172V11a8 8 0 1 0-16 0v9h2v-9a6 6 0 1 1 12 0z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Turn Back Line
 * @see {@link https://remixicon.com/icon/arrow-turn-back-line Remix Icon Docs}
 */
export { ArrowTurnBackLine }
