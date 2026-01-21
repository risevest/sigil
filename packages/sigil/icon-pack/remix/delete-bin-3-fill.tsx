import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DeleteBin3Fill = /* @__PURE__ */ memo(function DeleteBin3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2zm-9 2v2h2V9zm0 3v2h2v-2zm0 3v2h2v-2zM7 2h10v2H7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Delete Bin 3 Fill
 * @see {@link https://remixicon.com/icon/delete-bin-3-fill Remix Icon Docs}
 */
export { DeleteBin3Fill }
