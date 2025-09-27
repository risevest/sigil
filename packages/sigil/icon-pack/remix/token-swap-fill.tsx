import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21.5 9a6.5 6.5 0 0 1-4 6.002V15A8.5 8.5 0 0 0 9 6.5h-.002A6.502 6.502 0 0 1 21.5 9M7 3a4 4 0 0 0-4 4v1.5h2V7a2 2 0 0 1 2-2h1.5V3zm12 12.5V17a2 2 0 0 1-2 2h-1.5v2H17a4 4 0 0 0 4-4v-1.5zm-10 6a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13m0-9 2.5 2.5L9 17.5 6.5 15z" />
    </Svg>
  )
})
Icon.displayName = 'TokenSwapFill'
/**
 * Remix Icon: Token Swap Fill
 * @see {@link https://remixicon.com/icon/token-swap-fill Remix Icon Docs}
 */
export const TokenSwapFill = Icon
