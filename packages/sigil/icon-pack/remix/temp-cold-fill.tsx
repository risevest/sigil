import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 10.255V5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0M8 16a4 4 0 0 0 8 0z" />
    </Svg>
  )
})
Icon.displayName = 'TempColdFill'
/**
 * Remix Icon: Temp Cold Fill
 * @see {@link https://remixicon.com/icon/temp-cold-fill Remix Icon Docs}
 */
export const TempColdFill = Icon
