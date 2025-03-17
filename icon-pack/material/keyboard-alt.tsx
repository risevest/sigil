import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3.5H3C1.9 3.5 1 4.4 1 5.5V18.5C1 19.6 1.9 20.5 3 20.5H21C22.1 20.5 23 19.6 23 18.5V5.5C23 4.4 22.1 3.5 21 3.5ZM21 18.5H3V5.5H21V18.5ZM9 7.5H11V9.5H9V7.5ZM5 7.5H7V9.5H5V7.5ZM8 15.5H16V16.5H8V15.5ZM13 7.5H15V9.5H13V7.5ZM9 11.5H11V13.5H9V11.5ZM5 11.5H7V13.5H5V11.5ZM13 11.5H15V13.5H13V11.5ZM17 7.5H19V9.5H17V7.5ZM17 11.5H19V13.5H17V11.5Z" />
    </Svg>
  )
}

Icon.displayName = 'KeyboardAlt'

/**
 * Material Icon: Keyboard Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:keyboard_alt Material Icon Docs}
 */
export const KeyboardAlt = memo(Icon)
