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
          d="M18.763 14.214a1 1 0 0 1 1.302.268l.064.098L21.526 17c.745 1.29-.132 2.893-1.585 2.995l-.147.005h-6.38l.415.414a1 1 0 0 1-1.32 1.498l-.095-.084-2.115-2.115a1.017 1.017 0 0 1-.194-.267.995.995 0 0 1 .121-1.08l.036-.04 2.152-2.154a1 1 0 0 1 1.498 1.32l-.083.094-.415.414h6.38l-1.397-2.42a1 1 0 0 1 .366-1.366M8.703 9.625l.777 2.898a1 1 0 1 1-1.932.518l-.152-.566L4.206 18H7a1 1 0 1 1 0 2H4.206c-1.54 0-2.502-1.667-1.732-3l3.19-5.525-.566.151a1 1 0 0 1-.517-1.932l2.897-.776a1 1 0 0 1 1.225.707m4.942-6.263.087.138 3.19 5.525.152-.566a1 1 0 0 1 1.955.404l-.023.114-.777 2.898a.996.996 0 0 1-1.099.732l-.125-.025-2.898-.776a1 1 0 0 1 .403-1.956l.114.024.566.151L12 4.5l-1.397 2.42a1 1 0 0 1-1.785-.896l.053-.104 1.397-2.42c.715-1.238 2.425-1.327 3.282-.265z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'RecycleLine'

/**
 * MingCute Icon: Recycle Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RecycleLine = memo(Icon)
