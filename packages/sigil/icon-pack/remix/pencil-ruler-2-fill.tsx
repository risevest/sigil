import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m5.636 12.707 1.829 1.829 1.414-1.415-1.829-1.828 1.415-1.414 1.828 1.828 1.414-1.414L9.88 8.464l1.414-1.414 1.828 1.829 1.415-1.415-1.829-1.828 2.829-2.828a1 1 0 0 1 1.414 0l4.243 4.242a1 1 0 0 1 0 1.414L8.465 21.192a1 1 0 0 1-1.415 0L2.808 16.95a1 1 0 0 1 0-1.414zm8.485 5.656 4.243-4.242L21 16.756V21h-4.242zM5.636 9.878 2.808 7.05a1 1 0 0 1 0-1.415l2.828-2.828a1 1 0 0 1 1.414 0L9.88 5.635z" />
    </Svg>
  )
})
Icon.displayName = 'PencilRuler2Fill'
/**
 * Remix Icon: Pencil Ruler 2 Fill
 * @see {@link https://remixicon.com/icon/pencil-ruler-2-fill Remix Icon Docs}
 */
export const PencilRuler2Fill = Icon
