import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.09998 7L3.89998 16H5.79998L6.49998 14H9.69998L10.4 16H12.3L9.09998 7H7.09998ZM6.94998 12.65L8.09998 9L9.24998 12.65H6.94998ZM22.1 7L20.9 13.29L19.4 7H17.8L16.31 13.29L15.1 7H14.34L14.33 7.01C12.86 5.18 10.63 4 8.09998 4C3.67998 4 0.0999756 7.58 0.0999756 12C0.0999756 16.42 3.67998 20 8.09998 20C11.06 20 13.65 18.39 15.03 16C15.06 15.94 15.08 15.88 15.11 15.82C15.16 15.74 15.2 15.65 15.25 15.57L15.35 16H17.1L18.6 9.9L20.1 16H21.85L23.9 7H22.1ZM13.47 14.67C12.48 16.64 10.45 18 8.09998 18C4.78998 18 2.09998 15.31 2.09998 12C2.09998 8.69 4.78998 6 8.09998 6C11.41 6 14.1 8.69 14.1 12C14.1 12.96 13.87 13.86 13.47 14.67Z" />
    </Svg>
  )
}

Icon.displayName = 'WbAuto'

/**
 * Material Icon: Wb Auto
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wb_auto Material Icon Docs}
 */
export const WbAuto = memo(Icon)
