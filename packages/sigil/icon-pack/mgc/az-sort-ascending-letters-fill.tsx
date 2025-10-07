import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M10.759 13c1.377 0 2.09 1.61 1.226 2.628l-.095.103L8.62 19H11a1.5 1.5 0 0 1 .144 2.993L11 22H5.24c-1.378 0-2.09-1.61-1.226-2.628l.095-.103L7.379 16h-2.38a1.5 1.5 0 0 1-.144-2.993L5 13zm6.24-10a1.5 1.5 0 0 1 1.5 1.5v11.707l.269-.268a1.5 1.5 0 1 1 2.121 2.122l-2.828 2.828a1.5 1.5 0 0 1-2.122 0l-2.828-2.828a1.5 1.5 0 1 1 2.121-2.122l.268.268V4.5A1.5 1.5 0 0 1 17 3ZM8 2a2.21 2.21 0 0 1 2.017 1.305l.065.161 2.332 6.53a1.5 1.5 0 0 1-2.77 1.142L9.585 11H6.414a1.501 1.501 0 0 1-2.869-.866l.042-.139L5.92 3.467A2.21 2.21 0 0 1 8 2m0 4.56L7.487 8h1.028z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'AzSortAscendingLettersFill'
/**
 * MingCute Icon: Az Sort Ascending Letters Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AzSortAscendingLettersFill = Icon
