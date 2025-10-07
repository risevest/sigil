import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22.005 11v9a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-9zm0-4h-20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1z" />
    </Svg>
  )
})
Icon.displayName = 'BankCard2Fill'
/**
 * Remix Icon: Bank Card 2 Fill
 * @see {@link https://remixicon.com/icon/bank-card-2-fill Remix Icon Docs}
 */
export const BankCard2Fill = Icon
