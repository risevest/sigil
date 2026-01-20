import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Folder4Fill = /* @__PURE__ */ memo(function Folder4Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 21V11h14v9a1 1 0 0 1-1 1zm-2 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v3H7a1 1 0 0 0-1 1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder 4 Fill
 * @see {@link https://remixicon.com/icon/folder-4-fill Remix Icon Docs}
 */
export { Folder4Fill }
