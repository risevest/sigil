import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.51 9.99C12.51 8.34 11.16 6.99 9.51 6.99C7.86 6.99 6.51 8.34 6.51 9.99C6.51 11.64 7.86 12.99 9.51 12.99C11.16 12.99 12.51 11.64 12.51 9.99ZM9.51 10.99C8.96 10.99 8.51 10.54 8.51 9.99C8.51 9.44 8.96 8.99 9.51 8.99C10.06 8.99 10.51 9.44 10.51 9.99C10.51 10.54 10.06 10.99 9.51 10.99ZM16.01 12.99C17.12 12.99 18.01 12.1 18.01 10.99C18.01 9.88 17.12 8.99 16.01 8.99C14.9 8.99 14 9.88 14.01 10.99C14.01 12.1 14.9 12.99 16.01 12.99ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM5.85 17.11C6.53 16.57 8.12 16 9.51 16C9.58 16 9.66 16.01 9.74 16.01C9.98 15.37 10.41 14.72 11.04 14.15C10.48 14.05 9.95 13.99 9.51 13.99C8.21 13.99 6.12 14.44 4.78 15.42C4.28 14.38 4 13.22 4 11.99C4 7.58 7.59 3.99 12 3.99C16.41 3.99 20 7.58 20 11.99C20 13.19 19.73 14.33 19.25 15.36C18.25 14.77 16.89 14.49 16.01 14.49C14.49 14.49 11.51 15.3 11.51 17.19V19.97C9.24 19.84 7.22 18.76 5.85 17.11Z" />
    </Svg>
  )
}

Icon.displayName = 'SupervisedUserCircle'

/**
 * Material Icon: Supervised User Circle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:supervised_user_circle Material Icon Docs}
 */
export const SupervisedUserCircle = memo(Icon)
