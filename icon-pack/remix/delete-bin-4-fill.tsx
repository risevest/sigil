import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 7V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V7H2V5H22V7H20ZM11 10V17H13V10H11ZM7 2H17V4H7V2Z" />
    </Svg>
  )
}

Icon.displayName = 'DeleteBin4Fill'

/**
 * Remix Icon: Delete Bin 4 Fill
 * @see {@link https://remixicon.com/icon/delete-bin-4-fill Remix Icon Docs}
 */
export const DeleteBin4Fill = memo(Icon)
