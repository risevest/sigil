import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 15H10C10.55 15 11 14.55 11 14V12.5C11 11.95 10.55 11.5 10 11.5H7.5V10.5H9.5V11H11V10C11 9.45 10.55 9 10 9H7C6.45 9 6 9.45 6 10V11.5C6 12.05 6.45 12.5 7 12.5H9.5V13.5H7.5V13H6V14C6 14.55 6.45 15 7 15Z" />
      <Path d="M18 14V10C18 9.45 17.55 9 17 9H13V15H17C17.55 15 18 14.55 18 14ZM16.5 13.5H14.5V10.5H16.5V13.5Z" />
      <Path d="M20 4H4C2.89 4 2 4.9 2 6V18C2 19.1 2.89 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z" />
    </Svg>
  )
}

Icon.displayName = 'Sd'

/**
 * Material Icon: Sd
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sd Material Icon Docs}
 */
export const Sd = memo(Icon)
