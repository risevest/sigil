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
          d="M9 14a3 3 0 0 0 5.995.176L15 14h7v5a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19v-5zm3-2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m0-9a5.002 5.002 0 0 1 4.9 4H20a2 2 0 0 1 2 2v3h-7.17a3.001 3.001 0 0 0-5.66 0H2V9a2 2 0 0 1 2-2h3.1A5.002 5.002 0 0 1 12 3m0 2a3 3 0 0 0-2.762 1.828L9.17 7h5.658A3.001 3.001 0 0 0 12 5"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Briefcase2Fill'

/**
 * MingCute Icon: Briefcase 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Briefcase2Fill = memo(Icon)
