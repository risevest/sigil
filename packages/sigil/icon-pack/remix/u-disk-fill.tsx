import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const UDiskFill = /* @__PURE__ */ memo(function UDiskFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 12h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1M5 2h14v8H5zm4 3v2h2V5zm4 0v2h2V5z" />
    </Svg>
  )
})
/**
 * Remix Icon: U Disk Fill
 * @see {@link https://remixicon.com/icon/u-disk-fill Remix Icon Docs}
 */
export { UDiskFill }
