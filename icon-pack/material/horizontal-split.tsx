import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 15V17H5V15H19ZM21 5H3V7H21V5ZM21 9H3V11H21V9ZM21 13H3V19H21V13Z" />
    </Svg>
  )
}

Icon.displayName = 'HorizontalSplit'

/**
 * Material Icon: Horizontal Split
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:horizontal_split Material Icon Docs}
 */
export const HorizontalSplit = memo(Icon)
