import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M23 21.648H1L12 2.352z" />
    </Svg>
  )
})
Icon.displayName = 'VercelFill'
/**
 * Remix Icon: Vercel Fill
 * @see {@link https://remixicon.com/icon/vercel-fill Remix Icon Docs}
 */
export const VercelFill = Icon
