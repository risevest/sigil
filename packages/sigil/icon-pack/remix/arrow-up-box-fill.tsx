import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowUpBoxFill = /* @__PURE__ */ memo(function ArrowUpBoxFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm8 3.343 5.95 5.95H13v5.364h-2v-5.364H6.05z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Up Box Fill
 * @see {@link https://remixicon.com/icon/arrow-up-box-fill Remix Icon Docs}
 */
export { ArrowUpBoxFill }
