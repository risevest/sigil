import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.5 4C5.57 4 4 5.57 4 7.5C4 9.43 5.57 11 7.5 11C9.43 11 11 9.43 11 7.5C11 5.57 9.43 4 7.5 4ZM7.5 9C6.67 9 6 8.33 6 7.5C6 6.67 6.67 6 7.5 6C8.33 6 9 6.67 9 7.5C9 8.33 8.33 9 7.5 9ZM16.5 13C14.57 13 13 14.57 13 16.5C13 18.43 14.57 20 16.5 20C18.43 20 20 18.43 20 16.5C20 14.57 18.43 13 16.5 13ZM16.5 18C15.67 18 15 17.33 15 16.5C15 15.67 15.67 15 16.5 15C17.33 15 18 15.67 18 16.5C18 17.33 17.33 18 16.5 18ZM5.41 20L4 18.59L18.59 4L20 5.41L5.41 20Z" />
    </Svg>
  )
}

Icon.displayName = 'Percent'

/**
 * Material Icon: Percent
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:percent Material Icon Docs}
 */
export const Percent = memo(Icon)
