import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CaravanFill = /* @__PURE__ */ memo(function CaravanFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14.172 3a2 2 0 0 1 1.414.586l4.828 4.828A2 2 0 0 1 21 9.828V17h2v2h-8.126a4.002 4.002 0 0 1-7.748 0H3a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2zM11 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m3-9H6v6h8zm-2 2v2H8V9z" />
    </Svg>
  )
})
/**
 * Remix Icon: Caravan Fill
 * @see {@link https://remixicon.com/icon/caravan-fill Remix Icon Docs}
 */
export { CaravanFill }
