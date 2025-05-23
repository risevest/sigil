import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="m5.025 8.429 1.977 1.977v2.122a3 3 0 0 1-.317 1.342L5.62 16h6.976l2.916 2.916A4.002 4.002 0 0 1 8.126 18H4.164a1.1 1.1 0 0 1-.984-1.592l1.716-3.433a1 1 0 0 0 .106-.447V9c0-.192.008-.383.023-.571M12.002 2a7 7 0 0 1 7 7v3.528a1 1 0 0 0 .105.447l1.717 3.433A1.1 1.1 0 0 1 19.84 18h-.426l1.071 1.071a1 1 0 0 1-1.414 1.414L3.515 4.93a1 1 0 1 1 1.414-1.414l1.393 1.393A6.99 6.99 0 0 1 12.002 2m1.73 16h-3.464a2 2 0 0 0 3.464 0m-1.73-14a4.997 4.997 0 0 0-4.24 2.348L17.414 16h.97l-1.065-2.13a3 3 0 0 1-.317-1.342V9a5 5 0 0 0-5-5"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'NotificationOffLine'

/**
 * MingCute Icon: Notification Off Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const NotificationOffLine = memo(Icon)
