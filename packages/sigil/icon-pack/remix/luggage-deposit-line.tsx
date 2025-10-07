import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 3a1 1 0 0 1 1 1v2h4a1 1 0 0 1 1 1v12h2v2H1v-2h2V7a1 1 0 0 1 1-1h4V4a1 1 0 0 1 1-1zM8 8H5v11h3zm6 0h-4v11h4zm5 0h-3v11h3zm-5-3h-4v1h4z" />
    </Svg>
  )
})
Icon.displayName = 'LuggageDepositLine'
/**
 * Remix Icon: Luggage Deposit Line
 * @see {@link https://remixicon.com/icon/luggage-deposit-line Remix Icon Docs}
 */
export const LuggageDepositLine = Icon
