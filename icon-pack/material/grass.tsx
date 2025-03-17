import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 20H2V18H7.75C7.02 15.19 4.81 12.99 2 12.26C2.64 12.1 3.31 12 4 12C8.42 12 12 15.58 12 20ZM22 12.26C21.36 12.1 20.69 12 20 12C17.07 12 14.52 13.58 13.12 15.93C13.41 16.59 13.65 17.28 13.79 18C13.92 18.65 13.99 19.32 13.99 20H21.99V18H16.24C16.98 15.19 19.19 12.99 22 12.26ZM15.64 11.02C16.42 8.93 17.87 7.18 19.73 6.02C15.44 6.16 12 9.67 12 14C12 14.01 12 14.02 12 14.02C12.95 12.75 14.2 11.72 15.64 11.02ZM11.42 8.85C10.58 6.66 8.88 4.89 6.7 4C8.14 5.86 9 8.18 9 10.71C9 10.92 8.97 11.12 8.96 11.32C9.39 11.56 9.79 11.84 10.18 12.14C10.39 10.96 10.83 9.85 11.42 8.85Z" />
    </Svg>
  )
}

Icon.displayName = 'Grass'

/**
 * Material Icon: Grass
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:grass Material Icon Docs}
 */
export const Grass = memo(Icon)
