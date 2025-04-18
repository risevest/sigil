import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.5 11H2.5V9H1V15H2.5V12.5H4.5V15H6V9H4.5V11ZM7 10.5H8.5V15H10V10.5H11.5V9H7V10.5ZM12.5 10.5H14V15H15.5V10.5H17V9H12.5V10.5ZM21.5 9H18V15H19.5V13H21.5C22.3 13 23 12.3 23 11.5V10.5C23 9.7 22.3 9 21.5 9ZM21.5 11.5H19.5V10.5H21.5V11.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Http'

/**
 * Material Icon: Http
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:http Material Icon Docs}
 */
export const Http = memo(Icon)
