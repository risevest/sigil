import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TableFill = /* @__PURE__ */ memo(function TableFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 21H9V10h6zm2 0V10h5v10a1 1 0 0 1-1 1zM7 21H3a1 1 0 0 1-1-1V10h5zM22 8H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Table Fill
 * @see {@link https://remixicon.com/icon/table-fill Remix Icon Docs}
 */
export { TableFill }
