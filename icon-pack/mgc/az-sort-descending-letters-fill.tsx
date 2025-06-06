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
          d="M4.495 11.913a1.5 1.5 0 0 0 1.918-.909l.18-.504h2.814l.18.505a1.5 1.5 0 0 0 2.826-1.01L10.08 3.467a2.21 2.21 0 0 0-4.162 0l-2.332 6.53a1.5 1.5 0 0 0 .908 1.917ZM8 6.56l.336.94h-.672zm7.94-2.62a1.5 1.5 0 0 1 2.12 0l2.83 2.828a1.5 1.5 0 1 1-2.122 2.121l-.268-.268V20a1.5 1.5 0 1 1-3 0V8.621l-.268.268a1.5 1.5 0 1 1-2.121-2.121l2.828-2.829ZM5 13a1.5 1.5 0 0 0 0 3h2.379L4.11 19.269C3.102 20.277 3.816 22 5.241 22H11a1.5 1.5 0 0 0 0-3H8.62l3.269-3.269c1.008-1.008.294-2.731-1.132-2.731z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'AzSortDescendingLettersFill'

/**
 * MingCute Icon: Az Sort Descending Letters Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AzSortDescendingLettersFill = memo(Icon)
