import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 5V19H21V5H3ZM8.33 17H5V7H8.33V17ZM13.67 17H10.34V7H13.67V17ZM19 17H15.67V7H19V17Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewColumn'

/**
 * Material Icon: View Column
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_column Material Icon Docs}
 */
export const ViewColumn = memo(Icon)
