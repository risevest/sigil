import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10M11 7v4h2V7zm3 5v4h2v-4zm-6 0v4h2v-4z" />
    </Svg>
  )
})
Icon.displayName = 'Outlet2Fill'
/**
 * Remix Icon: Outlet 2 Fill
 * @see {@link https://remixicon.com/icon/outlet-2-fill Remix Icon Docs}
 */
export const Outlet2Fill = Icon
