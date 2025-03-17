import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 11H4C2.9 11 2 10.1 2 9V6C2 4.9 2.9 4 4 4H13V11ZM4 9H11V6H4V9ZM15 20H4C2.9 20 2 19.1 2 18V15C2 13.9 2.9 13 4 13H15V20ZM4 18H13V15H4V18ZM22 9H20L22 4H15V11H17V20L22 9ZM4.75 17.25H6.25V15.75H4.75V17.25ZM4.75 8.25H6.25V6.75H4.75V8.25Z" />
    </Svg>
  )
}

Icon.displayName = 'DynamicForm'

/**
 * Material Icon: Dynamic Form
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:dynamic_form Material Icon Docs}
 */
export const DynamicForm = memo(Icon)
