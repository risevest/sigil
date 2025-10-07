import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zm10.529 11.454a4.001 4.001 0 0 1-4.86-6.274 4 4 0 0 1 6.274 4.86l2.21 2.21-1.413 1.415zm-.618-2.032a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828" />
    </Svg>
  )
})
Icon.displayName = 'FileSearchLine'
/**
 * Remix Icon: File Search Line
 * @see {@link https://remixicon.com/icon/file-search-line Remix Icon Docs}
 */
export const FileSearchLine = Icon
