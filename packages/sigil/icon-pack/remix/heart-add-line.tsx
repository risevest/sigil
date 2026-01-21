import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HeartAddLine = /* @__PURE__ */ memo(function HeartAddLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3zm1.243-9.243a6 6 0 0 1 .237 8.235l-1.42-1.418c1.33-1.524 1.26-3.914-.233-5.404a4 4 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a4 4 0 0 0-5.686 5.605l8.432 8.446L12 21.485 3.52 12.993a6 6 0 0 1 8.48-8.464 6 6 0 0 1 8.242.228" />
    </Svg>
  )
})
/**
 * Remix Icon: Heart Add Line
 * @see {@link https://remixicon.com/icon/heart-add-line Remix Icon Docs}
 */
export { HeartAddLine }
