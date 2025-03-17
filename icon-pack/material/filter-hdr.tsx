import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 6L9.78 11.63L11.03 13.3L14 9.33L19 16H10.54L6.53 10.63L1 18H23L14 6ZM5 16L6.52 13.97L8.04 16H5Z" />
    </Svg>
  )
}

Icon.displayName = 'FilterHdr'

/**
 * Material Icon: Filter Hdr
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:filter_hdr Material Icon Docs}
 */
export const FilterHdr = memo(Icon)
