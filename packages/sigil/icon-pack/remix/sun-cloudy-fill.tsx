import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SunCloudyFill = /* @__PURE__ */ memo(function SunCloudyFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9.984 5.06a6.5 6.5 0 0 1 11.286 6.436A5.5 5.5 0 0 1 17.5 21H9a8 8 0 1 1 .984-15.941m2.071.544a8.03 8.03 0 0 1 4.403 4.495 5.53 5.53 0 0 1 3.12.307 4.5 4.5 0 0 0-7.522-4.802" />
    </Svg>
  )
})
/**
 * Remix Icon: Sun Cloudy Fill
 * @see {@link https://remixicon.com/icon/sun-cloudy-fill Remix Icon Docs}
 */
export { SunCloudyFill }
