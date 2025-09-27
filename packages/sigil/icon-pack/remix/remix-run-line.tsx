import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 2h10.5a6 6 0 0 1 3.054 11.166A6 6 0 0 1 20 18v3h-2v-3a4 4 0 0 0-4-4H4v-2h10.5a4 4 0 0 0 0-8H4zm7 19H4v-2h7z" />
    </Svg>
  )
})
Icon.displayName = 'RemixRunLine'
/**
 * Remix Icon: Remix Run Line
 * @see {@link https://remixicon.com/icon/remix-run-line Remix Icon Docs}
 */
export const RemixRunLine = Icon
