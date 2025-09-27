import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 11H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8h6v3l5-4-5-4z" />
    </Svg>
  )
})
Icon.displayName = 'LoginBoxFill'
/**
 * Remix Icon: Login Box Fill
 * @see {@link https://remixicon.com/icon/login-box-fill Remix Icon Docs}
 */
export const LoginBoxFill = Icon
