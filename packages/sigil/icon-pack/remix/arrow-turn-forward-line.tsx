import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowTurnForwardLine = /* @__PURE__ */ memo(function ArrowTurnForwardLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 5.828V13a6 6 0 0 1-12 0V4H3v9a8 8 0 1 0 16 0V5.828l2.536 2.536L22.95 6.95 18 2l-4.95 4.95 1.415 1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Turn Forward Line
 * @see {@link https://remixicon.com/icon/arrow-turn-forward-line Remix Icon Docs}
 */
export { ArrowTurnForwardLine }
