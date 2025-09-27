import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 13c1.093 0 2.117.292 3 .803V6a1 1 0 0 0-1-1h-8.586l-2-2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10.341A6 6 0 0 1 19 13m-3.536 5.465L19 22l4.95-4.95-1.415-1.414L19 19.172l-2.121-2.122z" />
    </Svg>
  )
})
Icon.displayName = 'FolderCheckFill'
/**
 * Remix Icon: Folder Check Fill
 * @see {@link https://remixicon.com/icon/folder-check-fill Remix Icon Docs}
 */
export const FolderCheckFill = Icon
