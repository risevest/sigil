import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg height={size} width={size} {...otherProps}>
      <G fill="none" fill-rule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M13.277 5.173C15.244 3.65 17.532 2.5 20 2.5a1.5 1.5 0 0 1 0 3c-1.532 0-3.18.725-4.886 2.045-1.692 1.31-3.304 3.104-4.731 4.986-2.851 3.761-4.801 7.66-5.041 8.14a1.5 1.5 0 1 1-2.684-1.342l.001-.001c.263-.525 2.312-4.623 5.333-8.61 1.51-1.992 3.305-4.011 5.285-5.545"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'EaseOutFill'

/**
 * MingCute Icon: Ease Out Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const EaseOutFill = memo(Icon)
