import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 2 5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2zM9.333 14.667H8V18h8v-1.333l-6.667-.001zM12 14.333a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 1.333a1.167 1.167 0 1 1 0 2.334 1.167 1.167 0 0 1 0-2.334M12.667 6h-1.334v1.333H8v1.334h8V7.333h-3.334z" />
    </Svg>
  )
})
Icon.displayName = 'FileHwpFill'
/**
 * Remix Icon: File Hwp Fill
 * @see {@link https://remixicon.com/icon/file-hwp-fill Remix Icon Docs}
 */
export const FileHwpFill = Icon
