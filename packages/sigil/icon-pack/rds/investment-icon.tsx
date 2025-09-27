import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 18 18" width={size} height={size} {...props}>
      <Path
        fill={color}
        d="M9.835 8.166V3.999L5.668 9.833h2.5v4.166l4.167-5.833zM9 17.333a8.333 8.333 0 1 1 0-16.667 8.333 8.333 0 0 1 0 16.667"
      />
    </Svg>
  )
})
Icon.displayName = 'InvestmentIcon'
export const InvestmentIcon = Icon
