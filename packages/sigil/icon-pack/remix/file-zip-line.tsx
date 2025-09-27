import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4H5v16zm-5-8v5h-4v-3h2v-2zm-2-8h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2z" />
    </Svg>
  )
})
Icon.displayName = 'FileZipLine'
/**
 * Remix Icon: File Zip Line
 * @see {@link https://remixicon.com/icon/file-zip-line Remix Icon Docs}
 */
export const FileZipLine = Icon
