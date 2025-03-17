import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM19 19H5V7H19V19ZM17 12H7V10H17V12ZM13 16H7V14H13V16Z" />
    </Svg>
  )
}

Icon.displayName = 'Wysiwyg'

/**
 * Material Icon: Wysiwyg
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wysiwyg Material Icon Docs}
 */
export const Wysiwyg = memo(Icon)
