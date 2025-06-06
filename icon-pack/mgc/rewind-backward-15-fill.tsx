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
          d="M5.439.501a1.5 1.5 0 0 1 1.499 1.07l.033.134.191.953a10.458 10.458 0 0 1 7.15-.926c5.656 1.275 9.209 6.895 7.934 12.552-1.275 5.657-6.895 9.21-12.552 7.934C4.818 21.12 1.508 16.795 1.501 12a1.5 1.5 0 0 1 3-.004 7.5 7.5 0 1 0 1.66-4.727 1.5 1.5 0 0 1-2.666-.975l.01-.142.505-4.325A1.5 1.5 0 0 1 5.44.5m10.134 6.497a1.5 1.5 0 0 1 .144 2.993l-.144.007h-1.565v.178h.032c2.025 0 3.416 1.577 3.416 3.416a3.416 3.416 0 0 1-3.416 3.416c-.44 0-.905-.103-1.282-.225-.361-.117-.836-.315-1.213-.626a1.5 1.5 0 0 1 1.888-2.331l.064.031.117.048.142.046.137.032.147.025.084-.009a.416.416 0 0 0 .332-.407c0-.164-.057-.261-.105-.312-.042-.042-.126-.104-.31-.104l-1.533.004a1.5 1.5 0 0 1-1.493-1.355l-.007-.145V8.898a1.9 1.9 0 0 1 1.751-1.895l.149-.005zm-6.365.18A1.5 1.5 0 0 1 10 8.5v7a1.5 1.5 0 0 1-3 0V11a1.5 1.5 0 0 1-.832-2.748l1.5-1a1.5 1.5 0 0 1 1.54-.074"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'RewindBackward15Fill'

/**
 * MingCute Icon: Rewind Backward 15 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RewindBackward15Fill = memo(Icon)
