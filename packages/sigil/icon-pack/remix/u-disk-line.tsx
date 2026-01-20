import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const UDiskLine = /* @__PURE__ */ memo(function UDiskLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 12H5v8h14zM5 10V2h14v8h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1zm2 0h10V4H7zm2-4h2v2H9zm4 0h2v2h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: U Disk Line
 * @see {@link https://remixicon.com/icon/u-disk-line Remix Icon Docs}
 */
export { UDiskLine }
