import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VolumeOffVibrateFill = /* @__PURE__ */ memo(function VolumeOffVibrateFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m19.39 3.161 1.413 1.414-2.475 2.475 2.475 2.475L18.328 12l2.475 2.476-2.475 2.475 2.475 2.475-1.414 1.414-3.889-3.89 2.475-2.474L15.5 12l2.475-2.475L15.5 7.05zM13 19.945a.5.5 0 0 1-.817.387L6.89 15.999 3 16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1l2.584-.002-3.776-3.776 1.414-1.414L13 12.586zm-.113-16.206a.5.5 0 0 1 .113.316v5.702L9.282 6.04l2.901-2.372a.5.5 0 0 1 .704.07" />
    </Svg>
  )
})
/**
 * Remix Icon: Volume Off Vibrate Fill
 * @see {@link https://remixicon.com/icon/volume-off-vibrate-fill Remix Icon Docs}
 */
export { VolumeOffVibrateFill }
