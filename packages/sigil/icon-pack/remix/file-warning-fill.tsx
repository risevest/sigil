import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-5 13v2h2v-2zm0-8v6h2V7z" />
    </Svg>
  )
})
Icon.displayName = 'FileWarningFill'
/**
 * Remix Icon: File Warning Fill
 * @see {@link https://remixicon.com/icon/file-warning-fill Remix Icon Docs}
 */
export const FileWarningFill = Icon
