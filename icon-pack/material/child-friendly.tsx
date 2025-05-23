import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.5 2V10H21.5C21.5 5.58 17.92 2 13.5 2ZM15.5 8V4.34C17.2 4.94 18.55 6.29 19.16 8H15.5ZM6.94 11L5.99 9H2.5V11H4.72C4.72 11 6.61 15.07 6.84 15.42C5.74 16.01 5 17.17 5 18.5C5 20.43 6.57 22 8.5 22C10.26 22 11.72 20.7 11.96 19H14.04C14.28 20.7 15.74 22 17.5 22C19.43 22 21 20.43 21 18.5C21 17.46 20.54 16.53 19.82 15.89C20.87 14.54 21.5 12.84 21.5 11H6.94ZM8.5 20C7.67 20 7 19.33 7 18.5C7 17.67 7.67 17 8.5 17C9.33 17 10 17.67 10 18.5C10 19.33 9.33 20 8.5 20ZM17.5 20C16.67 20 16 19.33 16 18.5C16 17.67 16.67 17 17.5 17C18.33 17 19 17.67 19 18.5C19 19.33 18.33 20 17.5 20ZM18.24 14.66L17.95 15.03C17.81 15.01 17.65 15 17.5 15C16.11 15 14.9 15.82 14.34 17H11.66C11.16 15.96 10.16 15.2 8.98 15.03L8.54 14.36C8.44 14.19 8.2 13.67 7.87 13H19.16C18.95 13.59 18.64 14.15 18.24 14.66Z" />
    </Svg>
  )
}

Icon.displayName = 'ChildFriendly'

/**
 * Material Icon: Child Friendly
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:child_friendly Material Icon Docs}
 */
export const ChildFriendly = memo(Icon)
