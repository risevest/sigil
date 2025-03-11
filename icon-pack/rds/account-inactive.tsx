import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 28 28" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.7399 12.5C11.4599 12.5 9.60986 10.59 9.60986 8.25C9.60986 5.91 11.4599 4 13.7399 4C16.0199 4 17.8699 5.91 17.8699 8.25C17.8699 10.59 16.0199 12.5 13.7399 12.5ZM13.7399 5.5C12.2899 5.5 11.1099 6.73 11.1099 8.25C11.1099 9.77 12.2899 11 13.7399 11C15.1899 11 16.3699 9.77 16.3699 8.25C16.3699 6.73 15.1899 5.5 13.7399 5.5Z" />
      <Path d="M6 22.9199V21.9499C6 17.6799 9.48 14.2 13.75 14.2C18.02 14.2 21.5 17.6699 21.5 21.9499V22.9199H6ZM7.51001 21.4199H19.96C19.69 18.2199 17 15.7 13.74 15.7C10.48 15.7 7.78 18.2199 7.52 21.4199H7.51001Z" />
    </Svg>
  )
}

Icon.displayName = 'AccountInactive'

export const AccountInactive = memo(Icon)
