import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 20C7 20.55 7.45 21 8 21H16C16.55 21 17 20.55 17 20V17H7V20Z" />
      <Path d="M18 7C17.45 7 17 7.45 17 8V5C17 3.9 16.1 3 15 3H7C5.9 3 5 3.9 5 5V10.8C5 10.93 5.01 11.06 5.04 11.19L5.84 15.19C5.93 15.66 6.34 15.99 6.82 15.99H17C17.55 15.99 18.09 15.55 18.2 15.01L18.97 11.18C18.99 11.06 19 10.93 19 10.8V8C19 7.45 18.55 7 18 7ZM17 10.6C17 10.73 16.36 14 16.36 14H7.64C7.64 14 7 10.74 7 10.6V5H15V10H17V10.6Z" />
      <Path d="M14 7H8V10H14V7Z" />
    </Svg>
  )
}

Icon.displayName = 'SportsMma'

/**
 * Material Icon: Sports Mma
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sports_mma Material Icon Docs}
 */
export const SportsMma = memo(Icon)
