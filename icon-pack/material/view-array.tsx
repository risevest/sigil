import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 7V17H9V7H15ZM21 5H18V19H21V5ZM17 5H7V19H17V5ZM6 5H3V19H6V5Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewArray'

/**
 * Material Icon: View Array
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_array Material Icon Docs}
 */
export const ViewArray = memo(Icon)
