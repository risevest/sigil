import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CpuLine = /* @__PURE__ */ memo(function CpuLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 18h12V6H6zm8 2h-4v2H8v-2H5a1 1 0 0 1-1-1v-3H2v-2h2v-4H2V8h2V5a1 1 0 0 1 1-1h3V2h2v2h4V2h2v2h3a1 1 0 0 1 1 1v3h2v2h-2v4h2v2h-2v3a1 1 0 0 1-1 1h-3v2h-2zM8 8h8v8H8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Cpu Line
 * @see {@link https://remixicon.com/icon/cpu-line Remix Icon Docs}
 */
export { CpuLine }
