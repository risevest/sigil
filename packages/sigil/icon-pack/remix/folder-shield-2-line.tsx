import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FolderShield2Line = /* @__PURE__ */ memo(function FolderShield2Line(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 9h-2V7h-8.414l-2-2H4v14h7.447a4.97 4.97 0 0 0 1.664 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zm-9 2h9v5.949c0 .99-.501 1.916-1.336 2.465L17.5 21.498l-3.164-2.084A2.95 2.95 0 0 1 13 16.95zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.95.95 0 0 0 .436-.795V13h-5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Folder Shield 2 Line
 * @see {@link https://remixicon.com/icon/folder-shield-2-line Remix Icon Docs}
 */
export { FolderShield2Line }
