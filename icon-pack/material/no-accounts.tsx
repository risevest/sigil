import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.18 10.94C15.38 10.5 15.5 10.02 15.5 9.5C15.5 7.57 13.93 6 12 6C11.48 6 11 6.12 10.56 6.32L15.18 10.94Z" />
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 10.15 4.63 8.45 5.69 7.1L8.55 9.96C8.76 11.52 9.98 12.75 11.54 12.95L13.74 15.15C13.17 15.05 12.59 15 12 15C9.68 15 7.55 15.8 5.86 17.12C4.7 15.73 4 13.95 4 12ZM12 20C10.26 20 8.66 19.44 7.35 18.5C8.66 17.56 10.26 17 12 17C13.74 17 15.34 17.56 16.65 18.5C15.34 19.44 13.74 20 12 20ZM18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.54 18.31 16.9Z" />
    </Svg>
  )
}

Icon.displayName = 'NoAccounts'

/**
 * Material Icon: No Accounts
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:no_accounts Material Icon Docs}
 */
export const NoAccounts = memo(Icon)
