import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileList3Fill = /* @__PURE__ */ memo(function FileList3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3m-1-5v2a1 1 0 1 0 2 0v-2zM6 7v2h8V7zm0 4v2h8v-2zm0 4v2h5v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: File List 3 Fill
 * @see {@link https://remixicon.com/icon/file-list-3-fill Remix Icon Docs}
 */
export { FileList3Fill }
