import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TableAltLine = /* @__PURE__ */ memo(function TableAltLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 13H4v3h16zM8 5H4v9h4zm6 0h-4v9h4zm6 0h-4v9h4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Table Alt Line
 * @see {@link https://remixicon.com/icon/table-alt-line Remix Icon Docs}
 */
export { TableAltLine }
