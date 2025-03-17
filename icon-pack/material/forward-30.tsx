import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 14C18 17.31 15.31 20 12 20C8.69 20 6 17.31 6 14C6 10.69 8.69 8 12 8V12L17 7L12 2V6C7.58 6 4 9.58 4 14C4 18.42 7.58 22 12 22C16.42 22 20 18.42 20 14H18ZM10.54 16.22C10.48 16.27 10.42 16.31 10.34 16.34C10.26 16.37 10.17 16.38 10.07 16.38C9.98 16.38 9.9 16.37 9.82 16.34C9.74 16.31 9.68 16.28 9.62 16.23C9.56 16.18 9.52 16.13 9.49 16.06C9.46 15.99 9.44 15.92 9.44 15.84H8.59C8.59 16.05 8.63 16.23 8.71 16.39C8.79 16.55 8.9 16.67 9.04 16.77C9.18 16.87 9.33 16.95 9.5 17C9.67 17.05 9.85 17.07 10.03 17.07C10.24 17.07 10.44 17.04 10.63 16.99C10.82 16.94 10.97 16.85 11.11 16.75C11.25 16.65 11.35 16.51 11.43 16.36C11.51 16.21 11.55 16.03 11.55 15.83C11.55 15.6 11.49 15.39 11.37 15.22C11.25 15.05 11.07 14.92 10.83 14.83C10.93 14.78 11.03 14.73 11.11 14.66C11.19 14.59 11.26 14.52 11.31 14.44C11.36 14.36 11.41 14.28 11.44 14.19C11.47 14.1 11.48 14.01 11.48 13.92C11.48 13.72 11.44 13.55 11.37 13.39C11.3 13.23 11.2 13.11 11.07 13.01C10.94 12.91 10.79 12.83 10.61 12.78C10.43 12.73 10.24 12.7 10.02 12.7C9.83 12.7 9.64 12.73 9.48 12.78C9.32 12.83 9.16 12.91 9.04 13.01C8.92 13.11 8.81 13.23 8.74 13.38C8.67 13.53 8.63 13.68 8.63 13.86H9.48C9.48 13.79 9.5 13.72 9.53 13.66C9.56 13.6 9.6 13.55 9.65 13.51C9.7 13.47 9.76 13.44 9.83 13.41C9.9 13.38 9.97 13.38 10.05 13.38C10.15 13.38 10.23 13.39 10.3 13.42C10.37 13.45 10.43 13.48 10.48 13.53C10.53 13.58 10.56 13.64 10.59 13.7C10.62 13.76 10.63 13.84 10.63 13.92C10.63 14.1 10.58 14.24 10.47 14.35C10.36 14.46 10.21 14.51 9.99 14.51H9.56V15.17H10.01C10.12 15.17 10.21 15.18 10.3 15.21C10.39 15.24 10.46 15.27 10.52 15.32C10.58 15.37 10.63 15.44 10.66 15.52C10.69 15.6 10.71 15.7 10.71 15.81C10.71 15.9 10.7 15.98 10.67 16.05C10.64 16.12 10.59 16.16 10.54 16.22ZM14.44 12.78C14.26 12.71 14.07 12.68 13.85 12.68C13.63 12.68 13.44 12.71 13.26 12.78C13.08 12.85 12.93 12.96 12.81 13.11C12.69 13.26 12.58 13.45 12.52 13.68C12.46 13.91 12.42 14.18 12.42 14.5V15.24C12.42 15.56 12.46 15.84 12.53 16.06C12.6 16.28 12.7 16.48 12.83 16.63C12.96 16.78 13.11 16.89 13.29 16.96C13.47 17.03 13.66 17.06 13.88 17.06C14.1 17.06 14.29 17.03 14.47 16.96C14.65 16.89 14.8 16.78 14.92 16.63C15.04 16.48 15.14 16.29 15.21 16.06C15.28 15.83 15.31 15.56 15.31 15.24V14.5C15.31 14.18 15.27 13.9 15.2 13.68C15.13 13.46 15.03 13.26 14.9 13.11C14.77 12.96 14.62 12.85 14.44 12.78ZM14.45 15.35C14.45 15.54 14.44 15.7 14.41 15.83C14.38 15.96 14.35 16.07 14.3 16.15C14.25 16.23 14.19 16.29 14.11 16.32C14.03 16.35 13.95 16.37 13.86 16.37C13.77 16.37 13.68 16.35 13.61 16.32C13.54 16.29 13.47 16.23 13.42 16.15C13.37 16.07 13.33 15.96 13.3 15.83C13.27 15.7 13.26 15.54 13.26 15.35V14.38C13.26 14.19 13.27 14.03 13.3 13.9C13.33 13.77 13.36 13.67 13.42 13.59C13.48 13.51 13.53 13.45 13.61 13.42C13.69 13.39 13.77 13.37 13.86 13.37C13.95 13.37 14.04 13.39 14.11 13.42C14.18 13.45 14.25 13.51 14.3 13.59C14.35 13.67 14.39 13.77 14.42 13.9C14.45 14.03 14.46 14.19 14.46 14.38V15.35H14.45Z" />
    </Svg>
  )
}

Icon.displayName = 'Forward30'

/**
 * Material Icon: Forward 30
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:forward_30 Material Icon Docs}
 */
export const Forward30 = memo(Icon)
