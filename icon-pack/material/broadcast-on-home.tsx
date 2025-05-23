import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.25 5C21.25 3.9 20.35 3 19.25 3H3.25V5H19.25V7.59C19.98 7.88 20.65 8.28 21.25 8.76V5Z" />
      <Path d="M7.25 8H2.25C1.75 8 1.25 8.5 1.25 9V18C1.25 18.5 1.75 19 2.25 19H7.25C7.75 19 8.25 18.5 8.25 18V9C8.25 8.5 7.75 8 7.25 8ZM6.25 17H3.25V10H6.25V17Z" />
      <Path d="M17 15.97C17.3 15.74 17.5 15.4 17.5 15C17.5 14.31 16.94 13.75 16.25 13.75C15.56 13.75 15 14.31 15 15C15 15.4 15.2 15.75 15.5 15.97V21H17V15.97Z" />
      <Path d="M16.25 12.5C17.63 12.5 18.75 13.62 18.75 15C18.75 15.69 18.47 16.31 18.02 16.76L19.08 17.82C19.8 17.1 20.25 16.1 20.25 15C20.25 12.79 18.46 11 16.25 11C14.04 11 12.25 12.79 12.25 15C12.25 16.1 12.7 17.1 13.42 17.83L14.48 16.77C14.03 16.32 13.75 15.69 13.75 15C13.75 13.62 14.87 12.5 16.25 12.5Z" />
      <Path d="M16.25 8.5C12.66 8.5 9.75 11.41 9.75 15C9.75 16.79 10.48 18.42 11.65 19.6L12.71 18.54C11.81 17.63 11.25 16.38 11.25 15C11.25 12.24 13.49 10 16.25 10C19.01 10 21.25 12.24 21.25 15C21.25 16.37 20.69 17.62 19.79 18.52L20.86 19.58C22.03 18.4 22.75 16.78 22.75 15C22.75 11.41 19.84 8.5 16.25 8.5Z" />
    </Svg>
  )
}

Icon.displayName = 'BroadcastOnHome'

/**
 * Material Icon: Broadcast On Home
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:broadcast_on_home Material Icon Docs}
 */
export const BroadcastOnHome = memo(Icon)
