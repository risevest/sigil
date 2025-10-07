import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-5 10.05a2.5 2.5 0 1 0 2 2.45V10h3V8h-5z" />
    </Svg>
  )
})
Icon.displayName = 'FileMusicFill'
/**
 * Remix Icon: File Music Fill
 * @see {@link https://remixicon.com/icon/file-music-fill Remix Icon Docs}
 */
export const FileMusicFill = Icon
