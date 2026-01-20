import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DeleteBin5Fill = /* @__PURE__ */ memo(function DeleteBin5Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5zm2-1v1h6V4zm0 8v6h2v-6zm4 0v6h2v-6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Delete Bin 5 Fill
 * @see {@link https://remixicon.com/icon/delete-bin-5-fill Remix Icon Docs}
 */
export { DeleteBin5Fill }
