import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Vidicon2Fill = /* @__PURE__ */ memo(function Vidicon2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 6V4H5V2h10v4h1a1 1 0 0 1 1 1v2.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm-8 4v2h2v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Vidicon 2 Fill
 * @see {@link https://remixicon.com/icon/vidicon-2-fill Remix Icon Docs}
 */
export { Vidicon2Fill }
