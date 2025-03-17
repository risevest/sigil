import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.5 20V10H16.5V11C17.2 11 17.87 11.1 18.5 11.29V10C18.5 8.9 17.6 8 16.5 8H15.5V6C15.5 3.24 13.26 1 10.5 1C7.74 1 5.5 3.24 5.5 6V8H4.5C3.4 8 2.5 8.9 2.5 10V20C2.5 21.1 3.4 22 4.5 22H10.76C10.34 21.4 10.01 20.72 9.79 20H4.5ZM7.5 6C7.5 4.34 8.84 3 10.5 3C12.16 3 13.5 4.34 13.5 6V8H7.5V6Z" />
      <Path d="M16.5 13C13.74 13 11.5 15.24 11.5 18C11.5 20.76 13.74 23 16.5 23C19.26 23 21.5 20.76 21.5 18C21.5 15.24 19.26 13 16.5 13ZM16.5 15C17.33 15 18 15.67 18 16.5C18 17.33 17.33 18 16.5 18C15.67 18 15 17.33 15 16.5C15 15.67 15.67 15 16.5 15ZM16.5 21C15.47 21 14.56 20.48 14.02 19.68C14.75 19.26 15.59 19 16.5 19C17.41 19 18.25 19.26 18.98 19.68C18.44 20.48 17.53 21 16.5 21Z" />
    </Svg>
  )
}

Icon.displayName = 'LockPerson'

/**
 * Material Icon: Lock Person
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:lock_person Material Icon Docs}
 */
export const LockPerson = memo(Icon)
