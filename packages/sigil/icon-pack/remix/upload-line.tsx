import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const UploadLine = /* @__PURE__ */ memo(function UploadLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 19h18v2H3zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.415z" />
    </Svg>
  )
})
/**
 * Remix Icon: Upload Line
 * @see {@link https://remixicon.com/icon/upload-line Remix Icon Docs}
 */
export { UploadLine }
