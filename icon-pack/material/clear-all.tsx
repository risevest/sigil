import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 13H19V11H5V13ZM3 17H17V15H3V17ZM7 7V9H21V7H7Z" fill={color} />
    </Svg>
  )
}

Icon.displayName = 'ClearAll'

/**
 * Material Icon: Clear All
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:clear_all Material Icon Docs}
 */
export const ClearAll = memo(Icon)
