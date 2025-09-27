import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 12v2H2v-2h2V2.995c0-.55.445-.995.996-.995H15l5 5v5zM3 16h2v6H3zm16 0h2v6h-2zm-4 0h2v6h-2zm-4 0h2v6h-2zm-4 0h2v6H7z" />
    </Svg>
  )
})
Icon.displayName = 'FileShredFill'
/**
 * Remix Icon: File Shred Fill
 * @see {@link https://remixicon.com/icon/file-shred-fill Remix Icon Docs}
 */
export const FileShredFill = Icon
