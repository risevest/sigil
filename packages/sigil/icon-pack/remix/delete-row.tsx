import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DeleteRow = /* @__PURE__ */ memo(function DeleteRow(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1 5 5 0 1 1-8 0H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm-7 10v2h6v-2zm6-8H5v4h14z" />
    </Svg>
  )
})
/**
 * Remix Icon: Delete Row
 * @see {@link https://remixicon.com/icon/delete-row Remix Icon Docs}
 */
export { DeleteRow }
