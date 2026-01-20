import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowRightLongLine = /* @__PURE__ */ memo(function ArrowRightLongLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 13v-2h16.172l-3.95-3.95 1.414-1.414L22 12l-6.364 6.364-1.414-1.414 3.95-3.95z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Right Long Line
 * @see {@link https://remixicon.com/icon/arrow-right-long-line Remix Icon Docs}
 */
export { ArrowRightLongLine }
