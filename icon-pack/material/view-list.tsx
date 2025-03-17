import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 5V19H21V5H3ZM7 7V9H5V7H7ZM5 13V11H7V13H5ZM5 15H7V17H5V15ZM19 17H9V15H19V17ZM19 13H9V11H19V13ZM19 9H9V7H19V9Z" />
    </Svg>
  )
}

Icon.displayName = 'ViewList'

/**
 * Material Icon: View List
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:view_list Material Icon Docs}
 */
export const ViewList = memo(Icon)
