import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM14 11C15.66 11 17 9.66 17 8C17 6.34 15.66 5 14 5C12.34 5 11 6.34 11 8C11 9.66 12.34 11 14 11ZM14 7C14.55 7 15 7.45 15 8C15 8.55 14.55 9 14 9C13.45 9 13 8.55 13 8C13 7.45 13.45 7 14 7ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM10.69 16C11.64 15.37 12.78 15 14 15C15.22 15 16.36 15.37 17.31 16H10.69ZM20 15.73C18.53 14.06 16.4 13 14 13C11.6 13 9.47 14.06 8 15.73V4H20V15.73Z" />
    </Svg>
  )
}

Icon.displayName = 'SwitchAccount'

/**
 * Material Icon: Switch Account
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:switch_account Material Icon Docs}
 */
export const SwitchAccount = memo(Icon)
