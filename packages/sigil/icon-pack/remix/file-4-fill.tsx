import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 15h-7v7H3.998C3.447 22 3 21.545 3 21.008V2.992C3 2.444 3.445 2 3.993 2h16.014A1 1 0 0 1 21 3.007zm0 2-5 4.997V17z" />
    </Svg>
  )
})
Icon.displayName = 'File4Fill'
/**
 * Remix Icon: File 4 Fill
 * @see {@link https://remixicon.com/icon/file-4-fill Remix Icon Docs}
 */
export const File4Fill = Icon
