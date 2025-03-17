import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 4V20H22V4H2ZM20 8.67H17.5V6H20V8.67ZM17.5 10.67H20V13.34H17.5V10.67ZM4 6H15.5V18H4V6ZM17.5 18V15.33H20V18H17.5Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewSidebar'

/**
 * Material Icon: View Sidebar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_sidebar Material Icon Docs}
 */
export const ViewSidebar = memo(Icon)
