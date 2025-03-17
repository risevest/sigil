import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 7L12 2L3 7V17L12 22L21 17V7ZM12 4.29L17.91 7.57L14.9 9.24C14.17 8.48 13.14 8 12 8C10.86 8 9.83 8.48 9.1 9.24L6.09 7.57L12 4.29ZM11 19.16L5 15.83V9.26L8.13 11C8.04 11.31 8 11.65 8 12C8 13.86 9.27 15.43 11 15.87V19.16ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12ZM13 19.16V15.88C14.73 15.44 16 13.87 16 12.01C16 11.66 15.96 11.32 15.87 11L19 9.26V15.83L13 19.16Z" />
    </Svg>
  )
}

Icon.displayName = 'Token'

/**
 * Material Icon: Token
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:token Material Icon Docs}
 */
export const Token = memo(Icon)
