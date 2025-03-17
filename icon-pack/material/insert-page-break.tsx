import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 20H6V17H4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V17H18V20Z" />
      <Path d="M6 4H13V9H18V11H20V8L14 2H6C4.9 2 4 2.9 4 4V11H6V4Z" />
      <Path d="M15 13H9V15H15V13Z" />
      <Path d="M23 13H17V15H23V13Z" />
      <Path d="M7 13H1V15H7V13Z" />
    </Svg>
  )
}

Icon.displayName = 'InsertPageBreak'

/**
 * Material Icon: Insert Page Break
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:insert_page_break Material Icon Docs}
 */
export const InsertPageBreak = memo(Icon)
