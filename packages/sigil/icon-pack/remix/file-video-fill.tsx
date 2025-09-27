import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-1 9.667-4.878-3.253a.4.4 0 0 0-.622.333v6.505a.4.4 0 0 0 .622.333L15 12.333a.4.4 0 0 0 0-.666" />
    </Svg>
  )
})
Icon.displayName = 'FileVideoFill'
/**
 * Remix Icon: File Video Fill
 * @see {@link https://remixicon.com/icon/file-video-fill Remix Icon Docs}
 */
export const FileVideoFill = Icon
