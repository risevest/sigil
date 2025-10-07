import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.998 20h6v-4h-4v-2h4V6h-2v5l-4-1.6zm-2 0V9.4l-4 1.6V6h-2v14zm-4-16V3h10v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 4 3.5-3h-7z" />
    </Svg>
  )
})
Icon.displayName = 'ShirtLine'
/**
 * Remix Icon: Shirt Line
 * @see {@link https://remixicon.com/icon/shirt-line Remix Icon Docs}
 */
export const ShirtLine = Icon
