import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 21.99 7 21.99L17 22C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM7 20V4H17V20H7ZM12 9C13.1 9 14 8.1 14 7C14 5.9 13.1 5 12 5C10.89 5 10 5.9 10 7C10 8.1 10.89 9 12 9ZM12 11C9.79 11 8 12.79 8 15C8 17.21 9.79 19 12 19C14.21 19 16 17.21 16 15C16 12.79 14.21 11 12 11ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17Z" />
    </Svg>
  )
}

Icon.displayName = 'Speaker'

/**
 * Material Icon: Speaker
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:speaker Material Icon Docs}
 */
export const Speaker = memo(Icon)
