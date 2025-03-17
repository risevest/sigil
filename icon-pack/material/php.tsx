import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.75 9H14.25V15H12.75V12.5H10.75V15H9.25V9H10.75V11H12.75V9ZM7.75 10.5V11.5C7.75 12.3 7.05 13 6.25 13H4.25V15H2.75V9H6.25C7.05 9 7.75 9.7 7.75 10.5ZM6.25 10.5H4.25V11.5H6.25V10.5ZM21.25 10.5V11.5C21.25 12.3 20.55 13 19.75 13H17.75V15H16.25V9H19.75C20.55 9 21.25 9.7 21.25 10.5ZM19.75 10.5H17.75V11.5H19.75V10.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Php'

/**
 * Material Icon: Php
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:php Material Icon Docs}
 */
export const Php = memo(Icon)
