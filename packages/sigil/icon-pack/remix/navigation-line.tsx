import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m4.965 5.096 3.546 12.41 3.04-6.08 5.637-2.255zM2.899 2.3l18.806 6.268a.5.5 0 0 1 .028.939L13 13l-4.425 8.85a.5.5 0 0 1-.928-.086L2.261 2.91a.5.5 0 0 1 .638-.611" />
    </Svg>
  )
})
Icon.displayName = 'NavigationLine'
/**
 * Remix Icon: Navigation Line
 * @see {@link https://remixicon.com/icon/navigation-line Remix Icon Docs}
 */
export const NavigationLine = Icon
