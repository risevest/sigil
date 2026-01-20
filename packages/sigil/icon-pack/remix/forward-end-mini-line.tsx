import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ForwardEndMiniLine = /* @__PURE__ */ memo(function ForwardEndMiniLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1M4 9.86 7.032 12 4 14.14zm-1.5 7.675a.5.5 0 0 0 .288-.092l7.133-5.035a.5.5 0 0 0 0-.817L2.788 6.556A.5.5 0 0 0 2 6.965v10.07a.5.5 0 0 0 .5.5M16.032 12 13 14.14V9.86zm-4.94-5.323a.5.5 0 0 0-.092.288v10.07a.5.5 0 0 0 .788.408l7.133-5.035a.5.5 0 0 0 0-.817l-7.133-5.035a.5.5 0 0 0-.697.12" />
    </Svg>
  )
})
/**
 * Remix Icon: Forward End Mini Line
 * @see {@link https://remixicon.com/icon/forward-end-mini-line Remix Icon Docs}
 */
export { ForwardEndMiniLine }
