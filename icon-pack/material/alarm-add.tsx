import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.3364 1.90527L21.9434 5.75027L20.6634 7.28527L16.0534 3.44227L17.3364 1.90527ZM6.6624 1.90527L7.9444 3.44127L3.3364 7.28527L2.0564 5.74927L6.6624 1.90527ZM11.9994 4.09527C7.0294 4.09527 2.9994 8.12527 2.9994 13.0953C2.9994 18.0653 7.0294 22.0953 11.9994 22.0953C16.9694 22.0953 20.9994 18.0653 20.9994 13.0953C20.9994 8.12527 16.9694 4.09527 11.9994 4.09527ZM11.9994 20.0953C8.1394 20.0953 4.9994 16.9553 4.9994 13.0953C4.9994 9.23527 8.1394 6.09527 11.9994 6.09527C15.8594 6.09527 18.9994 9.23527 18.9994 13.0953C18.9994 16.9553 15.8594 20.0953 11.9994 20.0953ZM12.9994 9.09527H10.9994V12.0953H7.9994V14.0953H10.9994V17.0953H12.9994V14.0953H15.9994V12.0953H12.9994V9.09527Z" />
    </Svg>
  )
}

Icon.displayName = 'AlarmAdd'

/**
 * Material Icon: Alarm Add
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:alarm_add Material Icon Docs}
 */
export const AlarmAdd = memo(Icon)
