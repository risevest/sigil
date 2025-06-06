import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M7 5.5H5.5V7a1.5 1.5 0 1 1-3 0V5A2.5 2.5 0 0 1 5 2.5h2a1.5 1.5 0 1 1 0 3m10-3a1.5 1.5 0 0 0 0 3h1.5V7a1.5 1.5 0 0 0 3 0V5A2.5 2.5 0 0 0 19 2.5zM5.5 17a1.5 1.5 0 0 0-3 0v2A2.5 2.5 0 0 0 5 21.5h2a1.5 1.5 0 0 0 0-3H5.5zm16 0a1.5 1.5 0 0 0-3 0v1.5H17a1.5 1.5 0 0 0 0 3h2a2.5 2.5 0 0 0 2.5-2.5zM9 10a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0 1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0m5 0a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm2-1c.182 0 .353.049.5.134A1 1 0 0 1 18 10v4a1 1 0 0 1-1.5.866A1 1 0 0 1 15 14v-4a1 1 0 0 1 1-1M5 11a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm16 0a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BarcodeScanFill'

/**
 * MingCute Icon: Barcode Scan Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BarcodeScanFill = memo(Icon)
