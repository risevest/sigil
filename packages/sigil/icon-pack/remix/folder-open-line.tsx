import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H20a1 1 0 0 1 1 1v3h-2V7h-7.414l-2-2H4v11.998L5.5 11h17l-2.31 9.243a1 1 0 0 1-.97.757zm16.938-8H7.062l-1.5 6h12.876z" />
    </Svg>
  )
})
Icon.displayName = 'FolderOpenLine'
/**
 * Remix Icon: Folder Open Line
 * @see {@link https://remixicon.com/icon/folder-open-line Remix Icon Docs}
 */
export const FolderOpenLine = Icon
