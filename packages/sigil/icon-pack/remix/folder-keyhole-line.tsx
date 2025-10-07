import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m10.414 3 2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-.828 2H4v14h16V7h-8.414zM12 9a2 2 0 0 1 1.001 3.732L13 17h-2v-4.268A2 2 0 0 1 12 9" />
    </Svg>
  )
})
Icon.displayName = 'FolderKeyholeLine'
/**
 * Remix Icon: Folder Keyhole Line
 * @see {@link https://remixicon.com/icon/folder-keyhole-line Remix Icon Docs}
 */
export const FolderKeyholeLine = Icon
