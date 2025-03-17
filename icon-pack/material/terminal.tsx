import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 4H4C2.89 4 2 4.9 2 6V18C2 19.1 2.89 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.11 4 20 4ZM20 18H4V8H20V18ZM18 17H12V15H18V17ZM7.5 17L6.09 15.59L8.67 13L6.08 10.41L7.5 9L11.5 13L7.5 17Z" />
    </Svg>
  )
}

Icon.displayName = 'Terminal'

/**
 * Material Icon: Terminal
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:terminal Material Icon Docs}
 */
export const Terminal = memo(Icon)
