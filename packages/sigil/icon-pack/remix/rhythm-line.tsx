import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 9h2v12H2zm6-6h2v18H8zm6 9h2v9h-2zm6-6h2v15h-2z" />
    </Svg>
  )
})
Icon.displayName = 'RhythmLine'
/**
 * Remix Icon: Rhythm Line
 * @see {@link https://remixicon.com/icon/rhythm-line Remix Icon Docs}
 */
export const RhythmLine = Icon
