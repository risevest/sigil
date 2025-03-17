import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 13H11V15H3V13ZM3 17H11V19H3V17ZM3 9H11V11H3V9ZM3 5H11V7H3V5ZM19 7V17H15V7H19ZM21 5H13V19H21V5Z" />
    </Svg>
  )
}

Icon.displayName = 'VerticalSplit'

/**
 * Material Icon: Vertical Split
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:vertical_split Material Icon Docs}
 */
export const VerticalSplit = memo(Icon)
