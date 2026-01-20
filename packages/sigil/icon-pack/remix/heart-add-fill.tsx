import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HeartAddFill = /* @__PURE__ */ memo(function HeartAddFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3zm1.243-9.243a6 6 0 0 1 .507 7.91 6 6 0 0 0-8.06 8.127l-.69.691-8.479-8.492a6 6 0 0 1 8.48-8.464 6 6 0 0 1 8.242.228" />
    </Svg>
  )
})
/**
 * Remix Icon: Heart Add Fill
 * @see {@link https://remixicon.com/icon/heart-add-fill Remix Icon Docs}
 */
export { HeartAddFill }
