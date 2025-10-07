import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16.5 3C19.538 3 22 5.5 22 9c0 1.425-.31 2.726-.827 3.907a6 6 0 0 0-8.36 8.112c-.307.182-.581.342-.813.481C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2M19 17v-3h-2v3h-3v2h2.999L17 22h2l-.001-3H22v-2z" />
    </Svg>
  )
})
Icon.displayName = 'HeartAdd2Fill'
/**
 * Remix Icon: Heart Add 2 Fill
 * @see {@link https://remixicon.com/icon/heart-add-2-fill Remix Icon Docs}
 */
export const HeartAdd2Fill = Icon
