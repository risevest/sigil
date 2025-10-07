import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 15V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2h16v2a1 1 0 1 0 2 0v-4z" />
    </Svg>
  )
})
Icon.displayName = 'FilePaperFill'
/**
 * Remix Icon: File Paper Fill
 * @see {@link https://remixicon.com/icon/file-paper-fill Remix Icon Docs}
 */
export const FilePaperFill = Icon
