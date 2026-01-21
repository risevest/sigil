import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AlibabaCloudLine = /* @__PURE__ */ memo(function AlibabaCloudLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h4l-1-2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l1-2zm11 2h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3l-1 2h4a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-4zm-8 6h8v-2H8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Alibaba Cloud Line
 * @see {@link https://remixicon.com/icon/alibaba-cloud-line Remix Icon Docs}
 */
export { AlibabaCloudLine }
