import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MicOffFill = /* @__PURE__ */ memo(function MicOffFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16.425 17.839A8.9 8.9 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11h2.016a7.002 7.002 0 0 0 9.87 5.354l-1.55-1.55A5 5 0 0 1 7 10V8.414L1.393 2.808l1.414-1.415 19.799 19.8-1.415 1.414zm2.95-2.679-1.443-1.442c.509-.81.856-1.73.997-2.718h2.016a8.95 8.95 0 0 1-1.57 4.16m-2.91-2.909-8.78-8.78A5 5 0 0 1 17 6v4c.001.81-.191 1.575-.533 2.251" />
    </Svg>
  )
})
/**
 * Remix Icon: Mic Off Fill
 * @see {@link https://remixicon.com/icon/mic-off-fill Remix Icon Docs}
 */
export { MicOffFill }
