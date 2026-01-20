import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MusicFill = /* @__PURE__ */ memo(function MusicFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465" />
    </Svg>
  )
})
/**
 * Remix Icon: Music Fill
 * @see {@link https://remixicon.com/icon/music-fill Remix Icon Docs}
 */
export { MusicFill }
