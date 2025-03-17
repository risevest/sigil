import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 7H20V9H4V7ZM4 13H20V11H4V13ZM4 17H11V15H4V17ZM4 21H11V19H4V21ZM15.41 18.17L14 16.75L12.59 18.16L15.41 21L20 16.42L18.58 15L15.41 18.17ZM4 3V5H20V3H4Z" />
    </Svg>
  )
}

Icon.displayName = 'Grading'

/**
 * Material Icon: Grading
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:grading Material Icon Docs}
 */
export const Grading = memo(Icon)
