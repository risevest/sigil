import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArchiveStackFill = /* @__PURE__ */ memo(function ArchiveStackFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 5h16V3H4zm16 4H4V7h16zM9 13h6v-2h6v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9h6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Archive Stack Fill
 * @see {@link https://remixicon.com/icon/archive-stack-fill Remix Icon Docs}
 */
export { ArchiveStackFill }
