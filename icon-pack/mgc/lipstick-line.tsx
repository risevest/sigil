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
          d="M5 6.556A4.556 4.556 0 0 1 9.556 2C10.353 2 11 2.647 11 3.444v6.824A2 2 0 0 1 12 12v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a2 2 0 0 1 1-1.732zM7 10h2V4.06a2.557 2.557 0 0 0-2 2.496zm-1 2v2h4v-2zm4 4H6v4h4zm3-2a4 4 0 0 1 8 0v7a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zm4-2a2 2 0 0 0-2 2v6h4v-6a2 2 0 0 0-2-2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'LipstickLine'

/**
 * MingCute Icon: Lipstick Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const LipstickLine = memo(Icon)
