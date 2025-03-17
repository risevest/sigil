import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 11.09V6.39L11 4.14L17 6.39V10.08C17.71 10.18 18.38 10.39 19 10.68V5L11 2L3 5V11.09C3 16.14 6.41 20.85 11 22C11.03 21.99 11.05 21.98 11.08 21.98C10.29 21.2 9.68 20.22 9.33 19.14C6.76 17.53 5 14.42 5 11.09Z" />
      <Path d="M16 12C13.24 12 11 14.24 11 17C11 19.76 13.24 22 16 22C18.76 22 21 19.76 21 17C21 14.24 18.76 12 16 12ZM19 17.5H16.5V20H15.5V17.5H13V16.5H15.5V14H16.5V16.5H19V17.5Z" />
    </Svg>
  )
}

Icon.displayName = 'AddModerator'

/**
 * Material Icon: Add Moderator
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_moderator Material Icon Docs}
 */
export const AddModerator = memo(Icon)
