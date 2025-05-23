import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.5 11V5C19.5 3.9 18.6 3 17.5 3H16.5V1H14.5V3H6.5V1H4.5V3H3.5C2.4 3 1.5 3.9 1.5 5V19C1.5 20.1 2.4 21 3.5 21H10.5V19H3.5V9H17.5V11H19.5ZM17.5 7H3.5V5H17.5V7ZM14.14 19C14.57 20.45 15.91 21.5 17.5 21.5C19.43 21.5 21 19.93 21 18C21 16.07 19.43 14.5 17.5 14.5C16.55 14.5 15.68 14.88 15.05 15.5H16.5V17H12.5V13H14V14.43C14.9 13.55 16.14 13 17.5 13C20.26 13 22.5 15.24 22.5 18C22.5 20.76 20.26 23 17.5 23C15.08 23 13.06 21.28 12.6 19H14.14Z" />
    </Svg>
  )
}

Icon.displayName = 'EventRepeat'

/**
 * Material Icon: Event Repeat
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:event_repeat Material Icon Docs}
 */
export const EventRepeat = memo(Icon)
