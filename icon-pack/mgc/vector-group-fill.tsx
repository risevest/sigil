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
          d="M10.5 3A2.5 2.5 0 0 0 9 7.5V9H7.5A2.5 2.5 0 1 0 4 12.5v4A2.5 2.5 0 1 0 7.5 20h4a2.5 2.5 0 1 0 3.5-3.5V15h1.5a2.5 2.5 0 1 0 3.5-3.5v-4A2.5 2.5 0 1 0 16.5 4h-4a2.496 2.496 0 0 0-2-1m5.55 3h-3.1A2.503 2.503 0 0 1 11 7.95v3.1c.98.199 1.751.97 1.95 1.95h3.1c.199-.98.97-1.751 1.95-1.95v-3.1A2.503 2.503 0 0 1 16.05 6M8 13.5c0-.818.393-1.544 1-2V11H7.95A2.503 2.503 0 0 1 6 12.95v3.1c.98.199 1.751.97 1.95 1.95h3.1c.199-.98.97-1.751 1.95-1.95V15h-.5A2.5 2.5 0 0 1 8 13.5"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'VectorGroupFill'

/**
 * MingCute Icon: Vector Group Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const VectorGroupFill = memo(Icon)
