import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" />
    </Svg>
  )
}

Icon.displayName = 'FilterList'

/**
 * Material Icon: Filter List
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:filter_list Material Icon Docs}
 */
export const FilterList = memo(Icon)
