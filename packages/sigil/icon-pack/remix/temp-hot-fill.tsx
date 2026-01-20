import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TempHotFill = /* @__PURE__ */ memo(function TempHotFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 10.255V5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0m3 1.871A4.002 4.002 0 0 0 12 20a4 4 0 0 0 1-7.874V5h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Temp Hot Fill
 * @see {@link https://remixicon.com/icon/temp-hot-fill Remix Icon Docs}
 */
export { TempHotFill }
