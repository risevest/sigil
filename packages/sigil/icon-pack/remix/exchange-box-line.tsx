import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.005 5.003v14h16v-14zm-1-2h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m9 6v-3l5 5h-9v-2zm-5 4h9v2h-4v3z" />
    </Svg>
  )
})
Icon.displayName = 'ExchangeBoxLine'
/**
 * Remix Icon: Exchange Box Line
 * @see {@link https://remixicon.com/icon/exchange-box-line Remix Icon Docs}
 */
export const ExchangeBoxLine = Icon
