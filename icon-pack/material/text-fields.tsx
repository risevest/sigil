import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.5 4.5V7.5H7.5V19.5H10.5V7.5H15.5V4.5H2.5ZM21.5 9.5H12.5V12.5H15.5V19.5H18.5V12.5H21.5V9.5Z" />
    </Svg>
  )
}

Icon.displayName = 'TextFields'

/**
 * Material Icon: Text Fields
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:text_fields Material Icon Docs}
 */
export const TextFields = memo(Icon)
