import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 9H17.5L15.75 15H14.25L12.5 9H14L15 12.43L16 9ZM5.1 12.9L6 15H4.5L3.65 13H2.5V15H1V9H4.5C5.35 9 6 9.65 6 10.5V11.5C6 12.1 5.6 12.65 5.1 12.9ZM4.5 10.5H2.5V11.5H4.5V10.5ZM21.5 13H19.5V15H18V9H21.5C22.33 9 23 9.67 23 10.5V11.5C23 12.33 22.33 13 21.5 13ZM21.5 10.5H19.5V11.5H21.5V10.5ZM11.5 9V10.5H8.5V11.25H10.5C11.05 11.25 11.5 11.7 11.5 12.25V14C11.5 14.55 11.05 15 10.5 15H7V13.5H10V12.75H7.75C7.34 12.75 7 12.41 7 12V10C7 9.45 7.45 9 8 9H11.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Rsvp'

/**
 * Material Icon: Rsvp
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:rsvp Material Icon Docs}
 */
export const Rsvp = memo(Icon)
