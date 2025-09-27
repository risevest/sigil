import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m5-6 5-4-5-4v3H9v2h8z" />
    </Svg>
  )
})
Icon.displayName = 'LogoutCircleRFill'
/**
 * Remix Icon: Logout Circle R Fill
 * @see {@link https://remixicon.com/icon/logout-circle-r-fill Remix Icon Docs}
 */
export const LogoutCircleRFill = Icon
