import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CompassesFill = /* @__PURE__ */ memo(function CompassesFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 4.123V1.997h2v2.126a4.002 4.002 0 0 1 1.802 6.728l6.064 10.502-1.732 1-6.063-10.501a4 4 0 0 1-2.142 0L4.866 22.353l-1.732-1 6.063-10.502A4.002 4.002 0 0 1 11 4.123m1 4.874a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </Svg>
  )
})
/**
 * Remix Icon: Compasses Fill
 * @see {@link https://remixicon.com/icon/compasses-fill Remix Icon Docs}
 */
export { CompassesFill }
