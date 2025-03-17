import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 5V19H21V5H3ZM8.33 17H5V7H8.33V17ZM13.67 17H10.34V13H13.67V17ZM19 17H15.67V13H19V17ZM19 11H10.33V7H19V11Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewQuilt'

/**
 * Material Icon: View Quilt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_quilt Material Icon Docs}
 */
export const ViewQuilt = memo(Icon)
