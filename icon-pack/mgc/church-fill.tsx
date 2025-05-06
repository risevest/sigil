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
          d="M13 3a1 1 0 1 0-2 0v1h-1a1 1 0 0 0 0 2h1v1.5l-3.6 2.7a1 1 0 0 0-.4.8v1.465l-2.555 1.703A1 1 0 0 0 4 15v5a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2v-5a1 1 0 0 0-.445-.832L17 12.465V11a1 1 0 0 0-.4-.8L13 7.5V6h1a1 1 0 1 0 0-2h-1zm1 14v3h-4v-3a2 2 0 1 1 4 0"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ChurchFill'

/**
 * MingCute Icon: Church Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ChurchFill = memo(Icon)
