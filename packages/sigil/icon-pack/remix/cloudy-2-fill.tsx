import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 1 1 13.984 0A6 6 0 0 1 17 21" />
    </Svg>
  )
})
Icon.displayName = 'Cloudy2Fill'
/**
 * Remix Icon: Cloudy 2 Fill
 * @see {@link https://remixicon.com/icon/cloudy-2-fill Remix Icon Docs}
 */
export const Cloudy2Fill = Icon
