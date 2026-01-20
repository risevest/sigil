import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TravestiLine = /* @__PURE__ */ memo(function TravestiLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8.951 8.537A7.5 7.5 0 1 1 7.537 9.95L4.662 7.075 2.187 9.55.772 8.136l6.364-6.364 1.415 1.414-2.475 2.475zM13.501 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
    </Svg>
  )
})
/**
 * Remix Icon: Travesti Line
 * @see {@link https://remixicon.com/icon/travesti-line Remix Icon Docs}
 */
export { TravestiLine }
