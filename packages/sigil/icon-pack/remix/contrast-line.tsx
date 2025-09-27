import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-2v-12a6 6 0 0 1 0 12" />
    </Svg>
  )
})
Icon.displayName = 'ContrastLine'
/**
 * Remix Icon: Contrast Line
 * @see {@link https://remixicon.com/icon/contrast-line Remix Icon Docs}
 */
export const ContrastLine = Icon
