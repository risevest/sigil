import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileTransferLine = /* @__PURE__ */ memo(function FileTransferLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM12 11V8l4 4-4 4v-3H8v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: File Transfer Line
 * @see {@link https://remixicon.com/icon/file-transfer-line Remix Icon Docs}
 */
export { FileTransferLine }
