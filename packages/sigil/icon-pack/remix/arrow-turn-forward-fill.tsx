import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowTurnForwardFill = /* @__PURE__ */ memo(function ArrowTurnForwardFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 8v5a6 6 0 0 1-12 0V4H3v9a8 8 0 1 0 16 0V8h4l-5-6-5 6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Turn Forward Fill
 * @see {@link https://remixicon.com/icon/arrow-turn-forward-fill Remix Icon Docs}
 */
export { ArrowTurnForwardFill }
