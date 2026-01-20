import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowLeftSFill = /* @__PURE__ */ memo(function ArrowLeftSFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m8 12 6-6v12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Left S Fill
 * @see {@link https://remixicon.com/icon/arrow-left-s-fill Remix Icon Docs}
 */
export { ArrowLeftSFill }
