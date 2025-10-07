import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m6-10a5.98 5.98 0 0 1-1.757 4.243L12 12V6a6 6 0 0 1 6 6" />
    </Svg>
  )
})
Icon.displayName = 'Progress3Fill'
/**
 * Remix Icon: Progress 3 Fill
 * @see {@link https://remixicon.com/icon/progress-3-fill Remix Icon Docs}
 */
export const Progress3Fill = Icon
