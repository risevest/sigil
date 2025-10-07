import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm10-6 5-4-5-4v3H9v2h6z" />
    </Svg>
  )
})
Icon.displayName = 'LogoutBoxRFill'
/**
 * Remix Icon: Logout Box R Fill
 * @see {@link https://remixicon.com/icon/logout-box-r-fill Remix Icon Docs}
 */
export const LogoutBoxRFill = Icon
