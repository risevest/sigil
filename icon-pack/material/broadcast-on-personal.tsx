import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.25 18.5V9.5L9.25 5L13.33 8.06C14.14 7.74 15.02 7.55 15.94 7.52L9.25 2.5L1.25 8.5V20.5H10.01C9.53 19.9 9.13 19.23 8.84 18.5H3.25Z" />
      <Path d="M16.25 14.25C15.56 14.25 15 14.81 15 15.5C15 15.9 15.2 16.25 15.5 16.47V21.5H17V16.47C17.3 16.24 17.5 15.9 17.5 15.5C17.5 14.81 16.94 14.25 16.25 14.25Z" />
      <Path d="M16.25 11.5C14.04 11.5 12.25 13.29 12.25 15.5C12.25 16.6 12.7 17.6 13.42 18.33L14.48 17.27C14.03 16.82 13.75 16.19 13.75 15.5C13.75 14.12 14.87 13 16.25 13C17.63 13 18.75 14.12 18.75 15.5C18.75 16.19 18.47 16.81 18.02 17.26L19.08 18.32C19.8 17.6 20.25 16.6 20.25 15.5C20.25 13.29 18.46 11.5 16.25 11.5Z" />
      <Path d="M16.25 9C12.66 9 9.75 11.91 9.75 15.5C9.75 17.29 10.48 18.92 11.65 20.1L12.71 19.04C11.81 18.13 11.25 16.88 11.25 15.5C11.25 12.74 13.49 10.5 16.25 10.5C19.01 10.5 21.25 12.74 21.25 15.5C21.25 16.87 20.69 18.12 19.79 19.02L20.86 20.08C22.03 18.9 22.75 17.28 22.75 15.5C22.75 11.91 19.84 9 16.25 9Z" />
    </Svg>
  )
}

Icon.displayName = 'BroadcastOnPersonal'

/**
 * Material Icon: Broadcast On Personal
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:broadcast_on_personal Material Icon Docs}
 */
export const BroadcastOnPersonal = memo(Icon)
