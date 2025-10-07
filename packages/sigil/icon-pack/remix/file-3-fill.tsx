import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 9v11.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.447 2 3.998 2H14v6a1 1 0 0 0 1 1zm0-2h-5V2.003z" />
    </Svg>
  )
})
Icon.displayName = 'File3Fill'
/**
 * Remix Icon: File 3 Fill
 * @see {@link https://remixicon.com/icon/file-3-fill Remix Icon Docs}
 */
export const File3Fill = Icon
