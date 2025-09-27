import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4zM6 6v14h12V6zm3 3h2v8H9zm4 0h2v8h-2z" />
    </Svg>
  )
})
Icon.displayName = 'DeleteBin6Line'
/**
 * Remix Icon: Delete Bin 6 Line
 * @see {@link https://remixicon.com/icon/delete-bin-6-line Remix Icon Docs}
 */
export const DeleteBin6Line = Icon
