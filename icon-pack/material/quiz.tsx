import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM13.51 10.16C13.92 9.43 14.69 9 15.14 8.36C15.62 7.68 15.35 6.42 14 6.42C13.12 6.42 12.68 7.09 12.5 7.65L11.13 7.08C11.51 5.96 12.52 5 13.99 5C15.22 5 16.07 5.56 16.5 6.26C16.87 6.86 17.08 7.99 16.51 8.83C15.88 9.76 15.28 10.04 14.95 10.64C14.82 10.88 14.77 11.04 14.77 11.82H13.25C13.26 11.41 13.19 10.74 13.51 10.16ZM12.95 13.95C12.95 13.36 13.42 12.91 14 12.91C14.59 12.91 15.04 13.36 15.04 13.95C15.04 14.53 14.6 15 14 15C13.42 15 12.95 14.53 12.95 13.95Z" />
    </Svg>
  )
}

Icon.displayName = 'Quiz'

/**
 * Material Icon: Quiz
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:quiz Material Icon Docs}
 */
export const Quiz = memo(Icon)
