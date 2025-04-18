import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.75 4C15.75 2.89 16.64 2 17.75 2C18.86 2 19.75 2.89 19.75 4C19.75 5.11 18.86 6 17.75 6C16.64 6 15.75 5.11 15.75 4ZM19.75 22V16H22.25L19.71 8.37C19.43 7.55 18.67 7 17.81 7H17.69C16.83 7 16.06 7.55 15.79 8.37L14.93 10.95C16.01 11.55 16.75 12.68 16.75 14V22H19.75ZM12.25 11.5C13.08 11.5 13.75 10.83 13.75 10C13.75 9.17 13.08 8.5 12.25 8.5C11.42 8.5 10.75 9.17 10.75 10C10.75 10.83 11.42 11.5 12.25 11.5ZM5.25 6C6.36 6 7.25 5.11 7.25 4C7.25 2.89 6.36 2 5.25 2C4.14 2 3.25 2.89 3.25 4C3.25 5.11 4.14 6 5.25 6ZM7.25 22V15H8.75V9C8.75 7.9 7.85 7 6.75 7H3.75C2.65 7 1.75 7.9 1.75 9V15H3.25V22H7.25ZM13.75 22V18H14.75V14C14.75 13.18 14.07 12.5 13.25 12.5H11.25C10.43 12.5 9.75 13.18 9.75 14V18H10.75V22H13.75Z" />
    </Svg>
  )
}

Icon.displayName = 'FamilyRestroom'

/**
 * Material Icon: Family Restroom
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:family_restroom Material Icon Docs}
 */
export const FamilyRestroom = memo(Icon)
