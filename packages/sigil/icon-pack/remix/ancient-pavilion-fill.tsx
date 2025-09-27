import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M1.516 7.877A4.5 4.5 0 0 0 5 11.887v7.114H3v2h18v-2h-2v-7.114a4.5 4.5 0 0 0 3.484-4.01A9 9 0 0 1 12.514 2h-1.029a9 9 0 0 1-9.97 5.877M17 19H7V12h10z" />
    </Svg>
  )
})
Icon.displayName = 'AncientPavilionFill'
/**
 * Remix Icon: Ancient Pavilion Fill
 * @see {@link https://remixicon.com/icon/ancient-pavilion-fill Remix Icon Docs}
 */
export const AncientPavilionFill = Icon
