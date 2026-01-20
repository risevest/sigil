import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DeleteBinLine = /* @__PURE__ */ memo(function DeleteBinLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm1 2H6v12h12zm-9 3h2v6H9zm4 0h2v6h-2zM9 4v2h6V4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Delete Bin Line
 * @see {@link https://remixicon.com/icon/delete-bin-line Remix Icon Docs}
 */
export { DeleteBinLine }
