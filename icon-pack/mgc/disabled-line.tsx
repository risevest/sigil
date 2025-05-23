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
          d="M11 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 5a3 3 0 1 1 4 2.83v1.45l2.162.72H16a1 1 0 1 1 0 2h-2a1 1 0 0 1-.316-.051L12 11.387V13a1 1 0 0 0 1 1h2a3 3 0 0 1 2.4 1.2l2.1 2.8h.5a1 1 0 1 1 0 2h-1a1 1 0 0 1-.8-.4l-2.4-3.2a1 1 0 0 0-.8-.4h-2a3 3 0 0 1-3-3V7.829A3.001 3.001 0 0 1 8 5m.272 6.17a4.5 4.5 0 1 0 5.238 6.375l1.78.91a6.5 6.5 0 1 1-7.563-9.21z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'DisabledLine'

/**
 * MingCute Icon: Disabled Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const DisabledLine = memo(Icon)
