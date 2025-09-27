import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 28 28" width={size} height={size} {...props}>
      <Path d="M13.74 12.5c-2.28 0-4.13-1.91-4.13-4.25S11.46 4 13.74 4s4.13 1.91 4.13 4.25-1.85 4.25-4.13 4.25m0-7c-1.45 0-2.63 1.23-2.63 2.75S12.29 11 13.74 11s2.63-1.23 2.63-2.75-1.18-2.75-2.63-2.75M6 22.92v-.97c0-4.27 3.48-7.75 7.75-7.75s7.75 3.47 7.75 7.75v.97zm1.51-1.5h12.45c-.27-3.2-2.96-5.72-6.22-5.72s-5.96 2.52-6.22 5.72z" />
    </Svg>
  )
})
Icon.displayName = 'AccountInactive'
export const AccountInactive = Icon
