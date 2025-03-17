import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.5 2.25H2.5C1.39 2.25 0.5 3.14 0.5 4.25V16.25C0.5 17.35 1.39 18.25 2.5 18.25H7.5V20.25H15.5V18.25H17.5V16.25H2.5V4.25H20.5V12.25H22.5V4.25C22.5 3.14 21.6 2.25 20.5 2.25ZM12.5 9.25V6.25H10.5V9.25H7.5V11.25H10.5V14.25H12.5V11.25H15.5V9.25H12.5ZM23.5 17.25L19 21.75L17.5 20.25L20.5 17.25L17.5 14.25L19 12.75L23.5 17.25Z" />
    </Svg>
  )
}

Icon.displayName = 'QueuePlayNext'

/**
 * Material Icon: Queue Play Next
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:queue_play_next Material Icon Docs}
 */
export const QueuePlayNext = memo(Icon)
