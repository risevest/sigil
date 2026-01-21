import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CornerDownRightLine = /* @__PURE__ */ memo(function CornerDownRightLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 14V5h2v7h10.172l-3.95-3.95 1.414-1.414L21 13l-6.364 6.364-1.414-1.414 3.95-3.95z" />
    </Svg>
  )
})
/**
 * Remix Icon: Corner Down Right Line
 * @see {@link https://remixicon.com/icon/corner-down-right-line Remix Icon Docs}
 */
export { CornerDownRightLine }
