import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" />
      <Path d="M7.1 10.18C7.36 10.74 7.49 11.34 7.5 11.98C7.51 12.61 7.37 13.23 7.1 13.84L8.47 14.46C8.84 13.65 9.02 12.81 9.01 11.96C9 11.12 8.82 10.31 8.47 9.56L7.1 10.18Z" />
      <Path d="M13.33 7.33C14.11 8.9 14.51 10.47 14.51 11.97C14.51 13.48 14.11 15.06 13.33 16.66L14.68 17.32C15.56 15.51 16.01 13.71 16.01 11.97C16.01 10.23 15.56 8.44 14.68 6.66L13.33 7.33Z" />
      <Path d="M10.2 8.72C10.73 9.79 11 10.93 11 12.12C11 13.29 10.74 14.35 10.22 15.27L11.52 16.01C12.17 14.86 12.5 13.56 12.5 12.12C12.5 10.7 12.18 9.33 11.54 8.05L10.2 8.72Z" />
    </Svg>
  )
}

Icon.displayName = 'Contactless'

/**
 * Material Icon: Contactless
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:contactless Material Icon Docs}
 */
export const Contactless = memo(Icon)
