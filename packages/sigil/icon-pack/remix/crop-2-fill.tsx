import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17.586 5 2.556-2.556 1.414 1.414L19 6.414V17h3v2h-3v3h-2V7H9V5zM15 17v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v15zM9 9h6v6H9z" />
    </Svg>
  )
})
Icon.displayName = 'Crop2Fill'
/**
 * Remix Icon: Crop 2 Fill
 * @see {@link https://remixicon.com/icon/crop-2-fill Remix Icon Docs}
 */
export const Crop2Fill = Icon
