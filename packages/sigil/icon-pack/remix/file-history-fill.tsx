import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16 2 5 4.999v14.01a.993.993 0 0 1-.993.991H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-3 7h-2v6h5v-2h-3z" />
    </Svg>
  )
})
Icon.displayName = 'FileHistoryFill'
/**
 * Remix Icon: File History Fill
 * @see {@link https://remixicon.com/icon/file-history-fill Remix Icon Docs}
 */
export const FileHistoryFill = Icon
