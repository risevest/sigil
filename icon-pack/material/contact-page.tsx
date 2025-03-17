import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.17 4L18 8.83V20H6V4H13.17ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14ZM16 17.43C16 16.62 15.52 15.9 14.78 15.58C13.93 15.21 12.99 15 12 15C11.01 15 10.07 15.21 9.22 15.58C8.48 15.9 8 16.62 8 17.43V18H16V17.43Z" />
    </Svg>
  )
}

Icon.displayName = 'ContactPage'

/**
 * Material Icon: Contact Page
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:contact_page Material Icon Docs}
 */
export const ContactPage = memo(Icon)
