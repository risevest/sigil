import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 4h2a5 5 0 0 1 5 5v4h-2V9a3 3 0 0 0-3-3h-2v3L9 5l5-4zm1 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1" />
    </Svg>
  )
})
Icon.displayName = 'Anticlockwise2Fill'
/**
 * Remix Icon: Anticlockwise 2 Fill
 * @see {@link https://remixicon.com/icon/anticlockwise-2-fill Remix Icon Docs}
 */
export const Anticlockwise2Fill = Icon
