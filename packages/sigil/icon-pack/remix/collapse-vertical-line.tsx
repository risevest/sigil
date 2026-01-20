import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CollapseVerticalLine = /* @__PURE__ */ memo(function CollapseVerticalLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 13.5 4.95 4.95-1.415 1.413-2.536-2.535V23h-2v-5.672L8.467 19.86l-1.414-1.414zM11 1v5.67L8.464 4.135 7.05 5.55 12 10.5l4.95-4.95-1.414-1.414L13 6.672V1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Collapse Vertical Line
 * @see {@link https://remixicon.com/icon/collapse-vertical-line Remix Icon Docs}
 */
export { CollapseVerticalLine }
