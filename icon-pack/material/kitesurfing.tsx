import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 3C6 1.9 6.9 1 8 1C9.1 1 10 1.9 10 3C10 4.1 9.1 5 8 5C6.9 5 6 4.1 6 3ZM20.06 1H17.94L15.5 3.44L16.56 4.5L20.06 1ZM22 23V21H21C19.96 21 18.92 20.65 18 20C16.17 21.3 13.83 21.3 12 20C10.17 21.3 7.83 21.3 6 20C5.09 20.65 4.04 21 3 21H2V23H3C4.03 23 5.05 22.75 6 22.25C7.89 23.25 10.11 23.25 12 22.25C13.89 23.25 16.11 23.25 18 22.25C18.95 22.75 19.97 23 21 23H22ZM21 13.28C21 14.72 18.81 16.9 15.96 18.86C15.65 18.95 15.33 19 15 19C13.8 19 12.73 18.34 12 17.5C11.27 18.34 10.2 19 9 19C8.06 19 7.19 18.59 6.51 18.01C6.97 17.62 7.47 17.23 8 16.84L6.45 13.87C6.15 13.3 6 12.64 6 12V8C6 6.9 6.9 6 8 6H11C12.38 6 13.63 5.44 14.54 4.54L15.95 5.95C14.68 7.21 12.93 8 11 8H9.6V11.5H12.4L14.09 13.38C16.04 12.54 17.86 12 19.15 12C19.99 12 21 12.25 21 13.28ZM12.2 14.27L11.5 13.5L9 13.6L9.83 15.61C10.42 15.23 11.64 14.55 12.2 14.27Z" />
    </Svg>
  )
}

Icon.displayName = 'Kitesurfing'

/**
 * Material Icon: Kitesurfing
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:kitesurfing Material Icon Docs}
 */
export const Kitesurfing = memo(Icon)
