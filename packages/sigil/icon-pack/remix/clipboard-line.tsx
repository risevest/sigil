import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 4V2h10v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4zm0 2H5v14h14V6h-2v2H7zm2-2v2h6V4z" />
    </Svg>
  )
})
Icon.displayName = 'ClipboardLine'
/**
 * Remix Icon: Clipboard Line
 * @see {@link https://remixicon.com/icon/clipboard-line Remix Icon Docs}
 */
export const ClipboardLine = Icon
