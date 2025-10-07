import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M23 21.648 12 2.352 1 21.648zm-3.442-2H4.442L12 6.39z" />
    </Svg>
  )
})
Icon.displayName = 'VercelLine'
/**
 * Remix Icon: Vercel Line
 * @see {@link https://remixicon.com/icon/vercel-line Remix Icon Docs}
 */
export const VercelLine = Icon
