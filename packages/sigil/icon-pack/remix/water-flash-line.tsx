import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const WaterFlashLine = /* @__PURE__ */ memo(function WaterFlashLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12.005 3.103-4.95 4.95a7 7 0 1 0 9.9 0zm0-2.828 6.364 6.364A9 9 0 1 1 5.64 19.367a9 9 0 0 1 0-12.728zm1 10.728h2.5l-4.5 6.5v-4.5h-2.5l4.5-6.5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Water Flash Line
 * @see {@link https://remixicon.com/icon/water-flash-line Remix Icon Docs}
 */
export { WaterFlashLine }
