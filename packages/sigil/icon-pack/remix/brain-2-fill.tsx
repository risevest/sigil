import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8.5 2a3.5 3.5 0 0 0-3.46 4.03A3.5 3.5 0 0 0 3.05 12a3.5 3.5 0 0 0 .963 5.67Q4 17.832 4 18a4 4 0 0 0 7 2.646V3.05A3.5 3.5 0 0 0 8.5 2M13 3.05v17.596a4 4 0 0 0 6.986-2.977A3.5 3.5 0 0 0 20.95 12a3.5 3.5 0 0 0-1.99-5.97q.04-.26.041-.53a3.5 3.5 0 0 0-6-2.45" />
    </Svg>
  )
})
Icon.displayName = 'Brain2Fill'
/**
 * Remix Icon: Brain 2 Fill
 * @see {@link https://remixicon.com/icon/brain-2-fill Remix Icon Docs}
 */
export const Brain2Fill = Icon
