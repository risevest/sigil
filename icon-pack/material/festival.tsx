import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M23 11V9C17 7 12 2 12 2C12 2 7 7 1 9V11C1 12.49 1.93 13.75 3.24 14.26C3.2 16.76 2.92 19.69 2 22H22C21.08 19.69 20.8 16.76 20.76 14.26C22.07 13.75 23 12.49 23 11ZM12 4.71C13.33 5.85 15.49 7.55 18.11 9H5.89C8.51 7.55 10.67 5.85 12 4.71ZM13 11H16C16 11.83 15.33 12.5 14.5 12.5C13.67 12.5 13 11.83 13 11ZM9.5 12.5C8.67 12.5 8 11.83 8 11H11C11 11.83 10.33 12.5 9.5 12.5ZM6 11C6 11.83 5.33 12.5 4.5 12.5C3.67 12.5 3 11.83 3 11H6ZM4.66 20C5.05 18.14 5.2 16.18 5.23 14.42C5.91 14.27 6.52 13.93 6.99 13.44C7.24 13.69 7.53 13.89 7.84 14.06C7.74 15.93 7.58 18.06 7.32 19.99H4.66V20ZM9.35 20C9.59 18.17 9.74 16.22 9.83 14.47C10.67 14.39 11.44 14.02 12 13.45C12.56 14.02 13.32 14.39 14.17 14.47C14.27 16.22 14.41 18.17 14.65 20H9.35ZM16.67 20C16.4 18.06 16.24 15.93 16.15 14.07C16.46 13.9 16.76 13.7 17 13.45C17.47 13.93 18.08 14.28 18.76 14.43C18.79 16.19 18.94 18.15 19.33 20.01H16.67V20ZM19.5 12.5C18.67 12.5 18 11.83 18 11H21C21 11.83 20.33 12.5 19.5 12.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Festival'

/**
 * Material Icon: Festival
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:festival Material Icon Docs}
 */
export const Festival = memo(Icon)
