import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 9V10.5H10.25V15H11.75V10.5H14V9H8ZM6 9H3C2.45 9 2 9.45 2 10V15H3.5V13.5H5.5V15H7V10C7 9.45 6.55 9 6 9ZM5.5 12H3.5V10.5H5.5V12ZM21 9H16.5C15.95 9 15.5 9.45 15.5 10V15H17V10.5H18V14H19.5V10.49H20.5V15H22V10C22 9.45 21.55 9 21 9Z" />
    </Svg>
  )
}

Icon.displayName = 'Atm'

/**
 * Material Icon: Atm
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:atm Material Icon Docs}
 */
export const Atm = memo(Icon)
