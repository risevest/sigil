import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.5649 4.43543V8.31543L14.5649 10.3154V5.43543H17.5649V13.3154L19.5649 15.3154V3.43543H14.5649V2.43543H6.68494L8.68494 4.43543H12.5649ZM2.97494 1.56543L1.56494 2.97543L5.56494 6.97543V18.4354H3.56494V20.4354H14.5649V15.9754L21.0249 22.4354L22.4349 21.0254L2.97494 1.56543ZM12.5649 18.4354H7.56494V8.97543L12.5649 13.9754V18.4354Z" />
    </Svg>
  )
}

Icon.displayName = 'NoMeetingRoom'

/**
 * Material Icon: No Meeting Room
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:no_meeting_room Material Icon Docs}
 */
export const NoMeetingRoom = memo(Icon)
