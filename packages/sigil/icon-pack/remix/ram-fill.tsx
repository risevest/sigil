import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RamFill = /* @__PURE__ */ memo(function RamFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm3 4h6v3H5zm8 0h6v3h-6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Ram Fill
 * @see {@link https://remixicon.com/icon/ram-fill Remix Icon Docs}
 */
export { RamFill }
