import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m21 16-6.003 6H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-2-1V4H5v16h9v-5z" />
    </Svg>
  )
})
Icon.displayName = 'File4Line'
/**
 * Remix Icon: File 4 Line
 * @see {@link https://remixicon.com/icon/file-4-line Remix Icon Docs}
 */
export const File4Line = Icon
