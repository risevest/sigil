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
          d="M18.5 6a3.5 3.5 0 1 1 0 7H3a1 1 0 1 1 0-2h15.5a1.5 1.5 0 1 0-1.436-1.936l-.034.135a1 1 0 1 1-1.96-.398A3.5 3.5 0 0 1 18.5 6M11 3a3 3 0 1 1 0 6H5a1 1 0 0 1 0-2h6a1 1 0 1 0-.803-1.596l-.064.097a1 1 0 0 1-1.731-1.002A3 3 0 0 1 11 3M5 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m12 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M9 19a1 1 0 1 1 0 2 1 1 0 0 1 0-2m5.5-4a2.5 2.5 0 1 1-1.667 4.363 1 1 0 0 1 1.235-1.568l.099.078A.5.5 0 1 0 14.5 17H7a1 1 0 1 1 0-2zm6.5 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SandstormLine'

/**
 * MingCute Icon: Sandstorm Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SandstormLine = memo(Icon)
