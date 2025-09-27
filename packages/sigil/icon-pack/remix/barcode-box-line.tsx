import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 4h3v10H6zm4 0h2v10h-2zm3 0h1v10h-1zm2 0h3v10h-3z" />
    </Svg>
  )
})
Icon.displayName = 'BarcodeBoxLine'
/**
 * Remix Icon: Barcode Box Line
 * @see {@link https://remixicon.com/icon/barcode-box-line Remix Icon Docs}
 */
export const BarcodeBoxLine = Icon
