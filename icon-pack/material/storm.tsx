import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.9321 8C16.7221 4.18 11.8221 2.87 8.00215 5.07C6.59215 5.89 5.52215 7.07 4.84215 8.44C4.71215 6.24 5.06215 4.04 5.86215 2H3.74215C2.20215 6.49 2.52215 11.58 5.07215 16C6.17215 17.91 7.95215 19.19 9.93215 19.72C11.9121 20.25 14.0921 20.03 16.0021 18.93C17.4121 18.11 18.4821 16.93 19.1621 15.56C19.2921 17.76 18.9521 19.96 18.1521 22H20.2621C21.7921 17.51 21.4821 12.42 18.9321 8ZM15.0021 17.2C12.1321 18.85 8.46215 17.87 6.80215 15C6.69215 14.8 6.59215 14.6 6.50215 14.4C5.30215 11.64 6.33215 8.34 9.00215 6.8C11.8621 5.15 15.5421 6.13 17.2021 9C17.3121 9.2 17.4121 9.4 17.5021 9.6C18.7021 12.36 17.6721 15.66 15.0021 17.2ZM12.0021 10C13.1021 10 14.0021 10.9 14.0021 12C14.0021 13.1 13.1021 14 12.0021 14C10.9021 14 10.0021 13.1 10.0021 12C10.0021 10.9 10.9021 10 12.0021 10ZM12.0021 8C9.79215 8 8.00215 9.79 8.00215 12C8.00215 14.21 9.79215 16 12.0021 16C14.2121 16 16.0021 14.21 16.0021 12C16.0021 9.79 14.2121 8 12.0021 8Z" />
    </Svg>
  )
}

Icon.displayName = 'Storm'

/**
 * Material Icon: Storm
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:storm Material Icon Docs}
 */
export const Storm = memo(Icon)
