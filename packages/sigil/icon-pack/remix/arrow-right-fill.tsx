import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowRightFill = /* @__PURE__ */ memo(function ArrowRightFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 13H4v-2h8V4l8 8-8 8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Right Fill
 * @see {@link https://remixicon.com/icon/arrow-right-fill Remix Icon Docs}
 */
export { ArrowRightFill }
