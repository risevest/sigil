import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowRightDownFill = /* @__PURE__ */ memo(function ArrowRightDownFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11.637 13.052 5.98 7.395 7.394 5.98l5.657 5.657L18 6.687v11.314H6.687z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Right Down Fill
 * @see {@link https://remixicon.com/icon/arrow-right-down-fill Remix Icon Docs}
 */
export { ArrowRightDownFill }
