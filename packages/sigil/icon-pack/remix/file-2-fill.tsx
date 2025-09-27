import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 9h6a1 1 0 0 0 1-1V2h10.002c.551 0 .998.455.998.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.992zm0-2 5-4.997V7z" />
    </Svg>
  )
})
Icon.displayName = 'File2Fill'
/**
 * Remix Icon: File 2 Fill
 * @see {@link https://remixicon.com/icon/file-2-fill Remix Icon Docs}
 */
export const File2Fill = Icon
