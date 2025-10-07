import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-2 6v4.989L12 11l-1.99 2L10 8H8v8h2l2-2 2 2h2V8z" />
    </Svg>
  )
})
Icon.displayName = 'FileWordFill'
/**
 * Remix Icon: File Word Fill
 * @see {@link https://remixicon.com/icon/file-word-fill Remix Icon Docs}
 */
export const FileWordFill = Icon
