import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 2h16v4.46L13.537 12 20 17.54V22H4v-4.46L10.463 12 4 6.46zm8 8.683 6-5.143V4H6v1.54zm0 2.634L6 18.46V20h12v-1.54z" />
    </Svg>
  )
})
Icon.displayName = 'Hourglass2Line'
/**
 * Remix Icon: Hourglass 2 Line
 * @see {@link https://remixicon.com/icon/hourglass-2-line Remix Icon Docs}
 */
export const Hourglass2Line = Icon
