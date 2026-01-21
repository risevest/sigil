import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TravestiFill = /* @__PURE__ */ memo(function TravestiFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.537 9.95 4.662 7.076 2.187 9.55.772 8.136l6.364-6.364 1.415 1.414-2.475 2.475L8.95 8.537A7.5 7.5 0 1 1 7.537 9.95" />
    </Svg>
  )
})
/**
 * Remix Icon: Travesti Fill
 * @see {@link https://remixicon.com/icon/travesti-fill Remix Icon Docs}
 */
export { TravestiFill }
