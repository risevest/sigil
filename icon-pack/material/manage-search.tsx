import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 8.5H2V6.5H7V8.5ZM7 11.5H2V13.5H7V11.5ZM20.59 18.5L16.76 14.67C15.96 15.19 15.02 15.5 14 15.5C11.24 15.5 9 13.26 9 10.5C9 7.74 11.24 5.5 14 5.5C16.76 5.5 19 7.74 19 10.5C19 11.52 18.69 12.46 18.17 13.25L22 17.09L20.59 18.5ZM17 10.5C17 8.85 15.65 7.5 14 7.5C12.35 7.5 11 8.85 11 10.5C11 12.15 12.35 13.5 14 13.5C15.65 13.5 17 12.15 17 10.5ZM2 18.5H12V16.5H2V18.5Z" />
    </Svg>
  )
}

Icon.displayName = 'ManageSearch'

/**
 * Material Icon: Manage Search
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:manage_search Material Icon Docs}
 */
export const ManageSearch = memo(Icon)
