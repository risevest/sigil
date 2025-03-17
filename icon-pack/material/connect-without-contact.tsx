import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 14H9C9 9.03 13.03 5 18 5V7C14.13 7 11 10.13 11 14ZM18 11V9C15.24 9 13 11.24 13 14H15C15 12.34 16.34 11 18 11ZM7 4C7 2.89 6.11 2 5 2C3.89 2 3 2.89 3 4C3 5.11 3.89 6 5 6C6.11 6 7 5.11 7 4ZM11.45 4.5H9.45C9.21 5.92 7.99 7 6.5 7H3.5C2.67 7 2 7.67 2 8.5V11H8V8.74C9.86 8.15 11.25 6.51 11.45 4.5ZM19 17C20.11 17 21 16.11 21 15C21 13.89 20.11 13 19 13C17.89 13 17 13.89 17 15C17 16.11 17.89 17 19 17ZM20.5 18H17.5C16.01 18 14.79 16.92 14.55 15.5H12.55C12.75 17.51 14.14 19.15 16 19.74V22H22V19.5C22 18.67 21.33 18 20.5 18Z" />
    </Svg>
  )
}

Icon.displayName = 'ConnectWithoutContact'

/**
 * Material Icon: Connect Without Contact
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:connect_without_contact Material Icon Docs}
 */
export const ConnectWithoutContact = memo(Icon)
