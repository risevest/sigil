import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5.636 6.633 12 .269l6.364 6.364a9 9 0 1 1-12.728 0M12 3.097l-4.95 4.95A6.98 6.98 0 0 0 5 12.997h14a6.98 6.98 0 0 0-2.05-4.95z" />
    </Svg>
  )
})
Icon.displayName = 'ContrastDrop2Fill'
/**
 * Remix Icon: Contrast Drop 2 Fill
 * @see {@link https://remixicon.com/icon/contrast-drop-2-fill Remix Icon Docs}
 */
export const ContrastDrop2Fill = Icon
