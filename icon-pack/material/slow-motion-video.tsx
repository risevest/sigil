import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.025 9.7898L9.97499 7.4998V16.4998L13.025 14.2098L15.975 11.9998L13.025 9.7898ZM13.025 9.7898L9.97499 7.4998V16.4998L13.025 14.2098L15.975 11.9998L13.025 9.7898ZM13.025 9.7898L9.97499 7.4998V16.4998L13.025 14.2098L15.975 11.9998L13.025 9.7898ZM10.975 4.0698V2.0498C8.96499 2.2498 7.13499 3.0498 5.65499 4.2598L7.07499 5.6898C8.18499 4.8298 9.51499 4.2498 10.975 4.0698ZM5.66499 7.0998L4.23499 5.6798C3.02499 7.1598 2.22499 8.9898 2.02499 10.9998H4.04499C4.22499 9.5398 4.80499 8.20981 5.66499 7.0998ZM4.04499 12.9998H2.02499C2.22499 15.0098 3.02499 16.8398 4.23499 18.3198L5.66499 16.8898C4.80499 15.7898 4.22499 14.4598 4.04499 12.9998ZM5.65499 19.7398C7.13499 20.9498 8.97499 21.7498 10.975 21.9498V19.9298C9.51499 19.7498 8.18499 19.1698 7.07499 18.3098L5.65499 19.7398ZM21.975 11.9998C21.975 17.1598 18.055 21.4198 13.025 21.9498V19.9298C16.945 19.4098 19.975 16.0498 19.975 11.9998C19.975 7.9498 16.945 4.5898 13.025 4.0698V2.0498C18.055 2.5798 21.975 6.8398 21.975 11.9998Z" />
    </Svg>
  )
}

Icon.displayName = 'SlowMotionVideo'

/**
 * Material Icon: Slow Motion Video
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:slow_motion_video Material Icon Docs}
 */
export const SlowMotionVideo = memo(Icon)
