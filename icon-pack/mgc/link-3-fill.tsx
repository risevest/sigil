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
          d="M6 4.5a5.5 5.5 0 0 0-2.751 10.263 1.5 1.5 0 1 0 1.502-2.597A2.5 2.5 0 0 1 6 7.5h6a2.5 2.5 0 0 1 .626 4.921 1.5 1.5 0 0 0 .748 2.906A5.502 5.502 0 0 0 12 4.5zm5.374 7.079a1.5 1.5 0 0 0-.748-2.906A5.502 5.502 0 0 0 12 19.5h6a5.5 5.5 0 0 0 2.751-10.263 1.5 1.5 0 0 0-1.502 2.597A2.5 2.5 0 0 1 18 16.5h-6a2.5 2.5 0 0 1-.626-4.921"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Link3Fill'

/**
 * MingCute Icon: Link 3 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Link3Fill = memo(Icon)
