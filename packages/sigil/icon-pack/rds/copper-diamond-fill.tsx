import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 25 24" width={size} height={size} {...props}>
      <Path d="M12.895 22.002c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.478 10-10 10m-2.5-13-2.5 2.5 4.999 5 5-5-2.5-2.5z" />
    </Svg>
  )
})
Icon.displayName = 'CopperDiamondFill'
export const CopperDiamondFill = Icon
