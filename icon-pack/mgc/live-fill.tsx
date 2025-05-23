import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M16.95 4a1 1 0 0 0-1.414-1.414l-3.89 3.889a.5.5 0 0 1-.707 0L8.464 4A1 1 0 1 0 7.05 5.414L8.636 7H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-5.05zm-7.487 7.92a1.045 1.045 0 0 1 1.458-.842c.355.154 1.028.467 1.868.952.84.485 1.449.912 1.76 1.142.567.419.568 1.263 0 1.683-.31.229-.914.652-1.76 1.14-.847.49-1.515.8-1.868.954a1.045 1.045 0 0 1-1.458-.842 19.106 19.106 0 0 1-.109-2.094c0-.966.066-1.708.11-2.092"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'LiveFill'

/**
 * MingCute Icon: Live Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const LiveFill = memo(Icon)
