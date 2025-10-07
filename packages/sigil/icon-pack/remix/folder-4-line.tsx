import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM8 19h12v-8H8zm-2 0v-9a1 1 0 0 1 1-1h13V7h-8.414l-2-2H4v14z" />
    </Svg>
  )
})
Icon.displayName = 'Folder4Line'
/**
 * Remix Icon: Folder 4 Line
 * @see {@link https://remixicon.com/icon/folder-4-line Remix Icon Docs}
 */
export const Folder4Line = Icon
