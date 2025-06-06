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
          d="M7.05 11a3.5 3.5 0 0 0 2.257 5.995L9.5 17h9.985a9 9 0 0 1-16.46-5.67l.03-.33zm4.45-3a2.5 2.5 0 0 1 .164 4.995L11.5 13h-2a.5.5 0 0 0-.09.992L9.5 14H21a1 1 0 0 1 .117 1.993L21 16H9.5a2.5 2.5 0 0 1-.164-4.995L9.5 11h2a.5.5 0 0 0 .09-.992L11.5 10H3a1 1 0 0 1-.117-1.993L3 8zm.5-5a9 9 0 0 1 8.945 10H13.95a3.5 3.5 0 0 0-2.45-6H4.516A8.991 8.991 0 0 1 12 3"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Sun2Fill'

/**
 * MingCute Icon: Sun 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Sun2Fill = memo(Icon)
