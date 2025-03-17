import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5 19.72H4.5V7.5H11.5V5.5H4.5C3.4 5.5 2.5 6.4 2.5 7.5V19.5C2.5 20.6 3.4 21.5 4.5 21.5H16.5C17.6 21.5 18.5 20.6 18.5 19.5V12.5H16.5V19.72Z" />
      <Path d="M18.5 2.5H16.5V5.5H13.5C13.51 5.51 13.5 7.5 13.5 7.5H16.5V10.49C16.51 10.5 18.5 10.49 18.5 10.49V7.5H21.5V5.5H18.5V2.5Z" />
      <Path d="M14.5 9.5H6.5V11.5H14.5V9.5Z" />
      <Path d="M6.5 12.5V14.5H14.5V12.5H6.5Z" />
      <Path d="M14.5 15.5H6.5V17.5H14.5V15.5Z" />
    </Svg>
  )
}

Icon.displayName = 'PostAdd'

/**
 * Material Icon: Post Add
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:post_add Material Icon Docs}
 */
export const PostAdd = memo(Icon)
