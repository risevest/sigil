import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2zm-9 3v7h2v-7zM7 2h10v2H7z" />
    </Svg>
  )
})
Icon.displayName = 'DeleteBin4Fill'
/**
 * Remix Icon: Delete Bin 4 Fill
 * @see {@link https://remixicon.com/icon/delete-bin-4-fill Remix Icon Docs}
 */
export const DeleteBin4Fill = Icon
