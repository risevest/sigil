import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-2.8 10L16 8h-2.4L12 10.286 10.4 8H8l2.8 4L8 16h2.4l1.6-2.286L13.6 16H16z" />
    </Svg>
  )
})
Icon.displayName = 'FileExcelFill'
/**
 * Remix Icon: File Excel Fill
 * @see {@link https://remixicon.com/icon/file-excel-fill Remix Icon Docs}
 */
export const FileExcelFill = Icon
