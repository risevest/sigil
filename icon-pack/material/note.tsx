import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 4H4C2.9 4 2 4.9 2 6V18.01C2 19.11 2.9 20 4 20H20C21.1 20 22 19.1 22 18V10L16 4ZM4 18.01V6H15V11H20V18.01H4Z" />
    </Svg>
  )
}

Icon.displayName = 'Note'

/**
 * Material Icon: Note
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:note Material Icon Docs}
 */
export const Note = memo(Icon)
