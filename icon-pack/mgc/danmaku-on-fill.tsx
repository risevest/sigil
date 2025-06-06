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
          d="M18 3a3 3 0 0 1 2.995 2.824L21 6v3.762a3.498 3.498 0 0 0-3.026.795l-.167.156-2.121 2.121a3.5 3.5 0 0 0-5.088 4.803l.141.15.377.376L8 20.5c-.791.593-1.906.075-1.994-.879L6 19.5V18H5a3 3 0 0 1-2.995-2.824L2 15V6a3 3 0 0 1 2.824-2.995L5 3zm1.575 9.48a1 1 0 0 1 1.497 1.32l-.083.095-4.596 4.596a1 1 0 0 1-1.32.083l-.094-.083-2.472-2.472a1 1 0 0 1 1.32-1.497l.094.083 1.765 1.765zM9 12H3a1 1 0 0 0-.117 1.993L3 14h6a1 1 0 0 0 .117-1.993zM7 7H5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m12 0h-8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'DanmakuOnFill'

/**
 * MingCute Icon: Danmaku On Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const DanmakuOnFill = memo(Icon)
