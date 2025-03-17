import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.5 9C17.5 5.96 15.04 3.5 12 3.5C8.96 3.5 6.5 5.96 6.5 9C6.5 11.7 8.44 13.93 11 14.4V16.5H9V18.5H11V20.5H13V18.5H15V16.5H13V14.4C15.56 13.93 17.5 11.7 17.5 9ZM8.5 9C8.5 7.07 10.07 5.5 12 5.5C13.93 5.5 15.5 7.07 15.5 9C15.5 10.93 13.93 12.5 12 12.5C10.07 12.5 8.5 10.93 8.5 9Z" />
    </Svg>
  )
}

Icon.displayName = 'Female'

/**
 * Material Icon: Female
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:female Material Icon Docs}
 */
export const Female = memo(Icon)
