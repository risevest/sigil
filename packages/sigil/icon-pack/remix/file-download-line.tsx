import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 12h3l-4 4-4-4h3V8h2zm2-8H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008z" />
    </Svg>
  )
})
Icon.displayName = 'FileDownloadLine'
/**
 * Remix Icon: File Download Line
 * @see {@link https://remixicon.com/icon/file-download-line Remix Icon Docs}
 */
export const FileDownloadLine = Icon
