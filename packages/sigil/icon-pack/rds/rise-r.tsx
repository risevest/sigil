import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 14 14" width={size} height={size} {...props}>
      <Path d="m3.017 5.477-.1-5.263H0V14h3.017V8.576C3.09 4.382 4.574 3.02 8.555 2.752V0c-3.56 0-4.87 1.47-5.44 5.477zM14 1.75c0 .966-.696 1.75-1.556 1.75-.859 0-1.555-.784-1.555-1.75S11.585 0 12.445 0C13.304 0 14 .784 14 1.75" />
    </Svg>
  )
})
Icon.displayName = 'RiseR'
export const RiseR = Icon
