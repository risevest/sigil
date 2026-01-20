import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VolumeMuteFill = /* @__PURE__ */ memo(function VolumeMuteFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387zm14.525-4 3.536 3.536-1.415 1.414L19 13.414l-3.536 3.536-1.414-1.414L17.586 12 14.05 8.465l1.414-1.415L19 10.586l3.535-3.536 1.415 1.415z" />
    </Svg>
  )
})
/**
 * Remix Icon: Volume Mute Fill
 * @see {@link https://remixicon.com/icon/volume-mute-fill Remix Icon Docs}
 */
export { VolumeMuteFill }
