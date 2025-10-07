import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10 6v2H6v10H4V8H0V6zm2 0h2.5l3 5.196L20.5 6H23v12h-2V9.133l-3.5 6.063L14 9.135V18h-2z" />
    </Svg>
  )
})
Icon.displayName = 'TrademarkFill'
/**
 * Remix Icon: Trademark Fill
 * @see {@link https://remixicon.com/icon/trademark-fill Remix Icon Docs}
 */
export const TrademarkFill = Icon
