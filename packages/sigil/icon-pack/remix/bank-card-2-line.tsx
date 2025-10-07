import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3.005 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 9h-16v7h16zm0-4V5h-16v3z" />
    </Svg>
  )
})
Icon.displayName = 'BankCard2Line'
/**
 * Remix Icon: Bank Card 2 Line
 * @see {@link https://remixicon.com/icon/bank-card-2-line Remix Icon Docs}
 */
export const BankCard2Line = Icon
