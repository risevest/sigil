import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 19v-9h5.586V4.586L16 11l-6.414 6.414V12H6v7zm9.836-12.95 1.415-1.414L21.615 11l-6.364 6.364-1.415-1.414 4.95-4.95z" />
    </Svg>
  )
})
Icon.displayName = 'CornerUpRightDoubleFill'
/**
 * Remix Icon: Corner Up Right Double Fill
 * @see {@link https://remixicon.com/icon/corner-up-right-double-fill Remix Icon Docs}
 */
export const CornerUpRightDoubleFill = Icon
