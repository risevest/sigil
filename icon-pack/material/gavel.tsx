import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M1.39502 21H13.395V23H1.39502V21ZM5.63502 8.07L8.46502 5.24L22.605 19.38L19.775 22.21L5.63502 8.07ZM12.715 1L18.375 6.66L15.545 9.49L9.88502 3.83L12.715 1ZM4.22502 9.48L9.88502 15.14L7.05502 17.97L1.39502 12.31L4.22502 9.48Z" />
    </Svg>
  )
}

Icon.displayName = 'Gavel'

/**
 * Material Icon: Gavel
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:gavel Material Icon Docs}
 */
export const Gavel = memo(Icon)
