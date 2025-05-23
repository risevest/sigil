import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 16.5C19.17 16.5 18.5 15.83 18.5 15V12.5C18.5 11.67 19.17 11 20 11C20.83 11 21.5 11.67 21.5 12.5V15C21.5 15.83 20.83 16.5 20 16.5ZM19.5 20H20.5V18.46C22.19 18.22 23.5 16.76 23.5 15H22.5C22.5 16.38 21.38 17.5 20 17.5C18.62 17.5 17.5 16.38 17.5 15H16.5C16.5 16.76 17.81 18.22 19.5 18.46V20ZM8.5 12C6.29 12 4.5 10.21 4.5 8C4.5 5.79 6.29 4 8.5 4C8.97 4 9.42 4.08 9.84 4.23C9 5.26 8.5 6.57 8.5 8C8.5 9.43 9 10.74 9.84 11.77C9.42 11.92 8.97 12 8.5 12ZM6.61 13.13C5.29 14.05 4.5 15.57 4.5 17.22V20H0.5V17.22C0.5 16.1 1.11 15.07 2.11 14.56C3.35 13.92 4.87 13.37 6.61 13.13ZM10.5 8C10.5 5.79 12.29 4 14.5 4C16.71 4 18.5 5.79 18.5 8C18.5 10.21 16.71 12 14.5 12C12.29 12 10.5 10.21 10.5 8ZM12.5 8C12.5 9.1 13.4 10 14.5 10C15.6 10 16.5 9.1 16.5 8C16.5 6.9 15.6 6 14.5 6C13.4 6 12.5 6.9 12.5 8ZM14.5 15C12.13 15 10.21 15.73 9.02 16.34C8.7 16.5 8.5 16.84 8.5 17.22V18H15.67C16.17 18.86 16.92 19.56 17.82 20H6.5V17.22C6.5 16.1 7.11 15.07 8.11 14.56C9.79 13.7 11.97 13 14.5 13C14.89 13 15.27 13.02 15.64 13.05C15.31 13.64 15.09 14.31 15.02 15.01C14.85 15 14.68 15 14.5 15Z" />
    </Svg>
  )
}

Icon.displayName = 'InterpreterMode'

/**
 * Material Icon: Interpreter Mode
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:interpreter_mode Material Icon Docs}
 */
export const InterpreterMode = memo(Icon)
