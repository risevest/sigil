import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 7h12v2H6zm6 4-6 6h12z" />
    </Svg>
  )
})
Icon.displayName = 'SkipUpFill'
/**
 * Remix Icon: Skip Up Fill
 * @see {@link https://remixicon.com/icon/skip-up-fill Remix Icon Docs}
 */
export const SkipUpFill = Icon
