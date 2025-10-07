import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22.005 10v10a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V10zm0-2h-20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-7 8v2h4v-2z" />
    </Svg>
  )
})
Icon.displayName = 'BankCardFill'
/**
 * Remix Icon: Bank Card Fill
 * @see {@link https://remixicon.com/icon/bank-card-fill Remix Icon Docs}
 */
export const BankCardFill = Icon
