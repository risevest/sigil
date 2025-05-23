import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.87 13.06C12.64 12.68 12.5 12.23 12.5 11.75C12.5 10.37 13.62 9.25 15 9.25H16C17.51 9.25 18 8.25 18 8.25C18 8.25 18.55 14.25 15 14.25C14.51 14.25 14.06 14.11 13.68 13.87C13.44 14.51 13.09 15.63 12.92 16.83C14.18 17.05 15.2 17.72 15.69 18.6C17.38 17.43 18.5 15.47 18.5 13.25H21.5C21.5 18.49 17.24 22.75 12 22.75C6.76 22.75 2.5 18.49 2.5 13.25C2.5 8.01 6.76 3.75 12 3.75V1.25L16 5.25L12 9.25V6.75C8.42 6.75 5.5 9.67 5.5 13.25C5.5 15.46 6.61 17.42 8.31 18.6C8.82 17.68 9.94 16.98 11.29 16.8C11.2 16.11 11.03 15.38 10.8 14.77C10.45 15.07 10 15.25 9.5 15.25C8.4 15.25 7.5 14.35 7.5 13.25V12.26C7.5 11.7 7.31 11.17 7 10.75C7 10.75 11.45 10.52 11.5 13.25C11.5 13.54 11.44 13.81 11.33 14.05C10.91 13.73 10.47 13.45 10 13.25C10.58 13.68 11.37 14.62 12 15.85C12.67 14.23 13.68 12.58 15 11.25C14.24 11.77 13.53 12.37 12.87 13.06Z" />
    </Svg>
  )
}

Icon.displayName = 'Compost'

/**
 * Material Icon: Compost
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:compost Material Icon Docs}
 */
export const Compost = memo(Icon)
