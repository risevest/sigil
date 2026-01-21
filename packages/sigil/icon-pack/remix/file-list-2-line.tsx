import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileList2Line = /* @__PURE__ */ memo(function FileList2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4H5v16zM8 7h8v2H8zm0 4h8v2H8zm0 4h5v2H8z" />
    </Svg>
  )
})
/**
 * Remix Icon: File List 2 Line
 * @see {@link https://remixicon.com/icon/file-list-2-line Remix Icon Docs}
 */
export { FileList2Line }
