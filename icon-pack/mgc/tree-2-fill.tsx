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
          d="M4 10.5C4 5.872 7.518 2 12 2s8 3.872 8 8.5c0 4.278-3.006 7.91-7 8.435V21a1 1 0 1 1-2 0v-2.065c-3.994-.525-7-4.157-7-8.435m8 6.5c.34 0 .674-.031 1-.09v-2.59l2.314-3.239a1 1 0 1 0-1.628-1.162l-1.814 2.54-1.165-1.166a1 1 0 0 0-1.414 1.414L11 14.414v2.495c.326.06.66.091 1 .091"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Tree2Fill'

/**
 * MingCute Icon: Tree 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Tree2Fill = memo(Icon)
