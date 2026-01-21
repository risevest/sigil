import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowDownSFill = /* @__PURE__ */ memo(function ArrowDownSFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 16-6-6h12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Down S Fill
 * @see {@link https://remixicon.com/icon/arrow-down-s-fill Remix Icon Docs}
 */
export { ArrowDownSFill }
