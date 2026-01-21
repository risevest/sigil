import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CellphoneFill = /* @__PURE__ */ memo(function CellphoneFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 2h11a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V0h2zm0 2v5h10V4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Cellphone Fill
 * @see {@link https://remixicon.com/icon/cellphone-fill Remix Icon Docs}
 */
export { CellphoneFill }
