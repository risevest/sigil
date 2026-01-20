import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BuildingLine = /* @__PURE__ */ memo(function BuildingLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h4v-8h-2V9h3a1 1 0 0 1 1 1zM5 5v14h8V5zm2 6h4v2H7zm0-4h4v2H7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Building Line
 * @see {@link https://remixicon.com/icon/building-line Remix Icon Docs}
 */
export { BuildingLine }
