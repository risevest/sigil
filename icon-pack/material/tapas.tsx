import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22.25 10V1H14.25V10C14.25 11.86 15.53 13.41 17.25 13.86V21H15.25V23H21.25V21H19.25V13.86C20.97 13.41 22.25 11.86 22.25 10ZM20.25 3V6H16.25V3H20.25ZM16.25 10V8H20.25V10C20.25 11.1 19.35 12 18.25 12C17.15 12 16.25 11.1 16.25 10ZM10.25 9H8.25V8H10.25C11.63 8 12.75 6.88 12.75 5.5C12.75 4.12 11.63 3 10.25 3H8.25V1H6.25V3H4.25C2.87 3 1.75 4.12 1.75 5.5C1.75 6.88 2.87 8 4.25 8H6.25V9H4.25C2.87 9 1.75 10.12 1.75 11.5C1.75 12.88 2.87 14 4.25 14H6.25V23H8.25V14H10.25C11.63 14 12.75 12.88 12.75 11.5C12.75 10.12 11.63 9 10.25 9ZM4.25 6C3.97 6 3.75 5.78 3.75 5.5C3.75 5.22 3.97 5 4.25 5H10.25C10.53 5 10.75 5.22 10.75 5.5C10.75 5.78 10.53 6 10.25 6H4.25ZM10.25 12H4.25C3.97 12 3.75 11.78 3.75 11.5C3.75 11.22 3.97 11 4.25 11H10.25C10.53 11 10.75 11.22 10.75 11.5C10.75 11.78 10.53 12 10.25 12Z" />
    </Svg>
  )
}

Icon.displayName = 'Tapas'

/**
 * Material Icon: Tapas
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:tapas Material Icon Docs}
 */
export const Tapas = memo(Icon)
