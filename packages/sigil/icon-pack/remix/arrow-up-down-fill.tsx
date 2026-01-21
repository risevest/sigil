import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowUpDownFill = /* @__PURE__ */ memo(function ArrowUpDownFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 8H8.001L8 20H6V8H2l5-5zm10 8-5 5-5-5h4V4h2v12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Up Down Fill
 * @see {@link https://remixicon.com/icon/arrow-up-down-fill Remix Icon Docs}
 */
export { ArrowUpDownFill }
