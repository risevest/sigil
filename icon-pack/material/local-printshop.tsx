import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 8H18V3H6V8H5C3.34 8 2 9.34 2 11V17H6V21H18V17H22V11C22 9.34 20.66 8 19 8ZM8 5H16V8H8V5ZM16 19H8V15H16V19ZM18 15V13H6V15H4V11C4 10.45 4.45 10 5 10H19C19.55 10 20 10.45 20 11V15H18Z" />
      <Path d="M18 12.5C18.5523 12.5 19 12.0523 19 11.5C19 10.9477 18.5523 10.5 18 10.5C17.4477 10.5 17 10.9477 17 11.5C17 12.0523 17.4477 12.5 18 12.5Z" />
    </Svg>
  )
}

Icon.displayName = 'LocalPrintshop'

/**
 * Material Icon: Local Printshop
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:local_printshop Material Icon Docs}
 */
export const LocalPrintshop = memo(Icon)
