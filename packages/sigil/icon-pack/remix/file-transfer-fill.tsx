import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileTransferFill = /* @__PURE__ */ memo(function FileTransferFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-4 9H8v2h4v3l4-4-4-4z" />
    </Svg>
  )
})
/**
 * Remix Icon: File Transfer Fill
 * @see {@link https://remixicon.com/icon/file-transfer-fill Remix Icon Docs}
 */
export { FileTransferFill }
