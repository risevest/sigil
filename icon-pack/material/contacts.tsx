import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18ZM4 0H20V2H4V0ZM4 22H20V24H4V22ZM12 12C13.38 12 14.5 10.88 14.5 9.5C14.5 8.12 13.38 7 12 7C10.62 7 9.5 8.12 9.5 9.5C9.5 10.88 10.62 12 12 12ZM12 8.5C12.55 8.5 13 8.95 13 9.5C13 10.05 12.55 10.5 12 10.5C11.45 10.5 11 10.05 11 9.5C11 8.95 11.45 8.5 12 8.5ZM17 15.99C17 13.9 13.69 13 12 13C10.31 13 7 13.9 7 15.99V17H17V15.99ZM8.81 15.5C9.42 14.98 10.84 14.5 12 14.5C13.17 14.5 14.59 14.98 15.2 15.5H8.81Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'Contacts'

/**
 * Material Icon: Contacts
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:contacts Material Icon Docs}
 */
export const Contacts = memo(Icon)
