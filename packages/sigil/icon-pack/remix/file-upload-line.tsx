import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM13 12v4h-2v-4H8l4-4 4 4z" />
    </Svg>
  )
})
Icon.displayName = 'FileUploadLine'
/**
 * Remix Icon: File Upload Line
 * @see {@link https://remixicon.com/icon/file-upload-line Remix Icon Docs}
 */
export const FileUploadLine = Icon
