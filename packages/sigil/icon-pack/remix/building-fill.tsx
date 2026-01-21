import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BuildingFill = /* @__PURE__ */ memo(function BuildingFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h2V9h3a1 1 0 0 1 1 1zM7 11v2h4v-2zm0-4v2h4V7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Building Fill
 * @see {@link https://remixicon.com/icon/building-fill Remix Icon Docs}
 */
export { BuildingFill }
