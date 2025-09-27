import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 19v-3.993H2.074a8 8 0 1 1 14.383-6.908A5.5 5.5 0 1 1 17.5 19zm-8 2h10v2H6zm-4-4h10v2H2z" />
    </Svg>
  )
})
Icon.displayName = 'CloudWindyFill'
/**
 * Remix Icon: Cloud Windy Fill
 * @see {@link https://remixicon.com/icon/cloud-windy-fill Remix Icon Docs}
 */
export const CloudWindyFill = Icon
