import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.71 6.69531C15.47 6.69531 17.71 8.93531 17.71 11.6953C17.71 12.3353 17.58 12.9453 17.36 13.5153L18.86 15.0153C19.4 14.0253 19.71 12.8953 19.71 11.6953C19.71 9.47531 18.68 7.50531 17.07 6.22531L15.71 1.69531H9.70998L8.74998 4.90531L10.89 7.04531C11.46 6.82531 12.07 6.69531 12.71 6.69531ZM11.2 3.69531H14.22L14.6 4.96531C14.05 4.80531 12.63 4.45531 10.82 4.96531L11.2 3.69531Z" />
      <Path d="M3.51998 2.50531L2.09998 3.91531L6.55998 8.37531C6.01998 9.36531 5.70998 10.4953 5.70998 11.6953C5.70998 13.9153 6.73998 15.8853 8.34998 17.1653L9.70998 21.6953H15.71L16.67 18.4853L20.49 22.3053L21.9 20.8953L3.51998 2.50531ZM14.22 19.6953H11.2L10.82 18.4253C11.37 18.5753 12.79 18.9353 14.6 18.4253L14.22 19.6953ZM12.71 16.6953C9.94998 16.6953 7.70998 14.4553 7.70998 11.6953C7.70998 11.0553 7.83998 10.4453 8.05998 9.87531L14.53 16.3453C13.96 16.5653 13.35 16.6953 12.71 16.6953Z" />
    </Svg>
  )
}

Icon.displayName = 'WatchOff'

/**
 * Material Icon: Watch Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:watch_off Material Icon Docs}
 */
export const WatchOff = memo(Icon)
