import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M14.83 19a3.001 3.001 0 0 1-5.66 0zM12 2a7 7 0 0 1 7 7v3.528a1 1 0 0 0 .106.447l1.716 3.433A1.1 1.1 0 0 1 19.838 18h-.424l1.071 1.071a1 1 0 0 1-1.414 1.414L3.515 4.93a1 1 0 1 1 1.414-1.414l1.392 1.392A6.99 6.99 0 0 1 12.001 2M5.023 8.427 14.596 18H4.162a1.1 1.1 0 0 1-.984-1.592l1.717-3.433A1 1 0 0 0 5 12.528V9c0-.193.008-.384.023-.573"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'NotificationOffFill'

/**
 * MingCute Icon: Notification Off Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const NotificationOffFill = memo(Icon)
