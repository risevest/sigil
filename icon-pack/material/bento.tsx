import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 5H4C2.9 5 2 5.9 2 7V17C2 18.1 2.9 19 4 19H20C21.1 19 22 18.1 22 17V7C22 5.9 21.1 5 20 5ZM20 11H14V7H20V11ZM4 7H12V17H4V7ZM14 17V13H20V17H14ZM9.5 12C9.5 12.83 8.83 13.5 8 13.5C7.17 13.5 6.5 12.83 6.5 12C6.5 11.17 7.17 10.5 8 10.5C8.83 10.5 9.5 11.17 9.5 12Z" />
    </Svg>
  )
}

Icon.displayName = 'Bento'

/**
 * Material Icon: Bento
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bento Material Icon Docs}
 */
export const Bento = memo(Icon)
