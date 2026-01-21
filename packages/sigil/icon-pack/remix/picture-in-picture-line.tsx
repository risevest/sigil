import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PictureInPictureLine = /* @__PURE__ */ memo(function PictureInPictureLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zm-1 2h-6v4h6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Picture In Picture Line
 * @see {@link https://remixicon.com/icon/picture-in-picture-line Remix Icon Docs}
 */
export { PictureInPictureLine }
