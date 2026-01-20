import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CornerDownLeftLine = /* @__PURE__ */ memo(function CornerDownLeftLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 14V5h-2v7H6.828l3.95-3.95-1.414-1.414L3 13l6.364 6.364 1.414-1.414L6.828 14z" />
    </Svg>
  )
})
/**
 * Remix Icon: Corner Down Left Line
 * @see {@link https://remixicon.com/icon/corner-down-left-line Remix Icon Docs}
 */
export { CornerDownLeftLine }
