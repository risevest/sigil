import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 18L15 14L11 10L10 11L13 14L10 17L11 18ZM20 6.5H16V4.5C16 3.95 15.78 3.45 15.41 3.09C15.05 2.72 14.55 2.5 14 2.5H10C8.9 2.5 8 3.4 8 4.5V6.5H4C2.9 6.5 2 7.4 2 8.5V19.5C2 20.6 2.9 21.5 4 21.5H20C21.1 21.5 22 20.6 22 19.5V8.5C22 7.4 21.1 6.5 20 6.5ZM10 4.5H14V6.5H10V4.5ZM20 19.5H4V8.5H20V19.5Z" />
    </Svg>
  )
}

Icon.displayName = 'NextWeek'

/**
 * Material Icon: Next Week
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:next_week Material Icon Docs}
 */
export const NextWeek = memo(Icon)
