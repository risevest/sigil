import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MusicLine = /* @__PURE__ */ memo(function MusicLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 13.535V3h8v2h-6v12a4 4 0 1 1-2-3.465M10 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Music Line
 * @see {@link https://remixicon.com/icon/music-line Remix Icon Docs}
 */
export { MusicLine }
