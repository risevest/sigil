import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 8v8h-2l-2-2-2 2H8V8h2v5l2-2 2 2V8h1V4H5v16h14V8zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008z" />
    </Svg>
  )
})
Icon.displayName = 'FileWordLine'
/**
 * Remix Icon: File Word Line
 * @see {@link https://remixicon.com/icon/file-word-line Remix Icon Docs}
 */
export const FileWordLine = Icon
