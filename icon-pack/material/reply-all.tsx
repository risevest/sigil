import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 7.5V4.5L0 11.5L7 18.5V15.5L3 11.5L7 7.5ZM13 8.5V4.5L6 11.5L13 18.5V14.4C18 14.4 21.5 16 24 19.5C23 14.5 20 9.5 13 8.5Z" />
    </Svg>
  )
}

Icon.displayName = 'ReplyAll'

/**
 * Material Icon: Reply All
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:reply_all Material Icon Docs}
 */
export const ReplyAll = memo(Icon)
