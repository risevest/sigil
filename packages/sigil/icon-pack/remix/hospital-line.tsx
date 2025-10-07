import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 20v-6h8v6h3V4H5v16zm2 0h4v-4h-4zm11 0h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM11 8V6h2v2h2v2h-2v2h-2v-2H9V8z" />
    </Svg>
  )
})
Icon.displayName = 'HospitalLine'
/**
 * Remix Icon: Hospital Line
 * @see {@link https://remixicon.com/icon/hospital-line Remix Icon Docs}
 */
export const HospitalLine = Icon
