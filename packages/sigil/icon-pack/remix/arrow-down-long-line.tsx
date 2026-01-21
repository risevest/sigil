import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowDownLongLine = /* @__PURE__ */ memo(function ArrowDownLongLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 2h-2v16.172l-3.95-3.95-1.414 1.414L12 22l6.364-6.364-1.414-1.414-3.95 3.95z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Down Long Line
 * @see {@link https://remixicon.com/icon/arrow-down-long-line Remix Icon Docs}
 */
export { ArrowDownLongLine }
