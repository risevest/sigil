import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowUpSFill = /* @__PURE__ */ memo(function ArrowUpSFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 8 6 6H6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Up S Fill
 * @see {@link https://remixicon.com/icon/arrow-up-s-fill Remix Icon Docs}
 */
export { ArrowUpSFill }
