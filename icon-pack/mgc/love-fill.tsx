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
          d="M9.498 5.793c1.42-1.904 3.555-2.46 5.519-1.925 2.12.577 3.984 2.398 4.603 4.934.032.13.06.26.083.39a4.453 4.453 0 0 0-2.774-.07c-1.287-.952-2.881-1.112-4.298-.59-1.775.655-3.161 2.316-3.482 4.406-.41 2.676 1.22 5.08 3.525 7.124l.388.336c-.313.022-.631-.027-.935-.092a9.474 9.474 0 0 1-.466-.112l-.537-.15C6.35 18.701 3.154 16.6 2.237 13.46c-.732-2.506-.028-5.015 1.52-6.575 1.434-1.445 3.56-2.031 5.741-1.092m1.628 7.448c.428-2.792 3.657-4.168 5.315-1.772a.104.104 0 0 0 .144.025c2.377-1.684 4.94.713 4.387 3.483-.32 1.606-1.81 2.94-4.47 4l-.435.17-.263.108c-.227.089-.467.16-.684.122-.216-.038-.417-.188-.6-.348l-.31-.28c-2.313-1.991-3.341-3.827-3.084-5.508"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'LoveFill'

/**
 * MingCute Icon: Love Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const LoveFill = memo(Icon)
