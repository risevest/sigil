import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM11 8H9v2h2v2h2v-2h2V8h-2V6h-2zm3 12h2v-6H8v6h2v-4h4z" />
    </Svg>
  )
})
Icon.displayName = 'HospitalFill'
/**
 * Remix Icon: Hospital Fill
 * @see {@link https://remixicon.com/icon/hospital-fill Remix Icon Docs}
 */
export const HospitalFill = Icon
