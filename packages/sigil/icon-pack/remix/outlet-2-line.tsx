import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16M11 7h2v4h-2zm3 5h2v4h-2zm-6 0h2v4H8z" />
    </Svg>
  )
})
Icon.displayName = 'Outlet2Line'
/**
 * Remix Icon: Outlet 2 Line
 * @see {@link https://remixicon.com/icon/outlet-2-line Remix Icon Docs}
 */
export const Outlet2Line = Icon
