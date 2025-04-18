import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 16H22V18H2V16ZM3.15 11.95L4 10.47L4.85 11.95L6.15 11.2L5.3 9.72H7V8.22H5.3L6.15 6.75L4.85 6L4 7.47L3.15 6L1.85 6.75L2.7 8.22H1V9.72H2.7L1.85 11.2L3.15 11.95ZM9.85 11.2L11.15 11.95L12 10.47L12.85 11.95L14.15 11.2L13.3 9.72H15V8.22H13.3L14.15 6.75L12.85 6L12 7.47L11.15 6L9.85 6.75L10.7 8.22H9V9.72H10.7L9.85 11.2ZM23 8.22H21.3L22.15 6.75L20.85 6L20 7.47L19.15 6L17.85 6.75L18.7 8.22H17V9.72H18.7L17.85 11.2L19.15 11.95L20 10.47L20.85 11.95L22.15 11.2L21.3 9.72H23V8.22Z" />
    </Svg>
  )
}

Icon.displayName = 'Password'

/**
 * Material Icon: Password
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:password Material Icon Docs}
 */
export const Password = memo(Icon)
