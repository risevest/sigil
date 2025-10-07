import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 28 28" width={size} height={size} {...props}>
      <Path d="M25 23.46H3V9.56l1.77-4.53C5.1 4.37 5.7 4 6.36 4h15.27c.67 0 1.27.37 1.56.97l1.8 4.59v13.9zm-20.5-1.5h19V9.84l-1.67-4.27s-.1-.08-.2-.08H6.36a.24.24 0 0 0-.22.14L4.5 9.83z" />
      <Path d="M21.02 8.95H6.98v1.5h14.04zM14.47 12.75h-1.5v1.57h1.5zM14.47 18.57h-1.5v1.57h1.5z" />
      <Path d="M15.19 19.17h-3.67v-1.2h3.07v-.95H12.1c-.33 0-.6-.27-.6-.6v-2.1c0-.33.27-.6.6-.6h3.65v1.2H12.7v.9h2.49c.33 0 .6.27.6.6v2.15c0 .33-.27.6-.6.6" />
    </Svg>
  )
})
Icon.displayName = 'InvestInactive'
export const InvestInactive = Icon
