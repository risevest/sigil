import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowRightUpLongLine = /* @__PURE__ */ memo(function ArrowRightUpLongLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m5.636 19.778-1.414-1.414L15.657 6.93h-5.586v-2h9v9h-2V8.343z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Right Up Long Line
 * @see {@link https://remixicon.com/icon/arrow-right-up-long-line Remix Icon Docs}
 */
export { ArrowRightUpLongLine }
