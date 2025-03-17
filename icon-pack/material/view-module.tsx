import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 5V19H21V5H3ZM19 11H15.67V7H19V11ZM13.67 11H10.34V7H13.67V11ZM8.33 7V11H5V7H8.33ZM5 17V13H8.33V17H5ZM10.33 17V13H13.66V17H10.33ZM15.67 17V13H19V17H15.67Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewModule'

/**
 * Material Icon: View Module
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_module Material Icon Docs}
 */
export const ViewModule = memo(Icon)
