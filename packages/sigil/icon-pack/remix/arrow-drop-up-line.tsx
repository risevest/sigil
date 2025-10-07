import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 11.828-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowDropUpLine'
/**
 * Remix Icon: Arrow Drop Up Line
 * @see {@link https://remixicon.com/icon/arrow-drop-up-line Remix Icon Docs}
 */
export const ArrowDropUpLine = Icon
