import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Robot2Fill = /* @__PURE__ */ memo(function Robot2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13.5 2c0 .444-.193.843-.5 1.118V5h5a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h5V3.118A1.5 1.5 0 1 1 13.5 2M0 10h2v6H0zm24 0h-2v6h2zM9 14.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m7.5-1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Robot 2 Fill
 * @see {@link https://remixicon.com/icon/robot-2-fill Remix Icon Docs}
 */
export { Robot2Fill }
