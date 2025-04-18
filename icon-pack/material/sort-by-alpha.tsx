import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.215 4.6598H10.495L12.855 2.2998L15.215 4.6598ZM10.525 19.3698H15.185L12.855 21.6998L10.525 19.3698ZM6.375 6.2698L1.875 17.7298H3.715L4.635 15.2798H9.745L10.665 17.7298H12.505L8.015 6.2698H6.375ZM5.245 13.6398L7.185 8.4598L9.125 13.6398H5.245ZM16.005 16.1398H22.125V17.7298H13.595V16.4398L19.515 7.8798H13.635V6.2798H21.935V7.5398L16.005 16.1398Z" />
    </Svg>
  )
}

Icon.displayName = 'SortByAlpha'

/**
 * Material Icon: Sort By Alpha
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sort_by_alpha Material Icon Docs}
 */
export const SortByAlpha = memo(Icon)
