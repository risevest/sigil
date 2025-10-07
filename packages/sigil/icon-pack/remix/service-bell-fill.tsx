import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 3v2h-2v1.05c5.053.501 9 4.765 9 9.95H2c0-5.185 3.947-9.449 9-9.95V5H9V3zm8 17v-2H1v2z" />
    </Svg>
  )
})
Icon.displayName = 'ServiceBellFill'
/**
 * Remix Icon: Service Bell Fill
 * @see {@link https://remixicon.com/icon/service-bell-fill Remix Icon Docs}
 */
export const ServiceBellFill = Icon
