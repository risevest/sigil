import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.99875 21.0015H6.74875L17.8087 9.94152L14.0587 6.19152L2.99875 17.2515V21.0015ZM4.99875 18.0815L14.0587 9.02152L14.9787 9.94152L5.91875 19.0015H4.99875V18.0815Z" />
      <Path d="M18.3687 3.29152C17.9787 2.90152 17.3487 2.90152 16.9587 3.29152L15.1287 5.12152L18.8787 8.87152L20.7087 7.04152C21.0987 6.65152 21.0987 6.02152 20.7087 5.63152L18.3687 3.29152Z" />
    </Svg>
  )
}

Icon.displayName = 'ModeEditOutline'

/**
 * Material Icon: Mode Edit Outline
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mode_edit_outline Material Icon Docs}
 */
export const ModeEditOutline = memo(Icon)
