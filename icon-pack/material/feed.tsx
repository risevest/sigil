import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V8L16 3ZM19 19H5V5H15V9H19V19ZM7 17H17V15H7V17ZM12 7H7V9H12V7ZM7 13H17V11H7V13Z" />
    </Svg>
  )
}

Icon.displayName = 'Feed'

/**
 * Material Icon: Feed
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:feed Material Icon Docs}
 */
export const Feed = memo(Icon)
