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
          d="m20.728 6.517 1.035 3.864a2 2 0 0 1-1.414 2.45L18 13.46V15a1 1 0 0 0 1 1h1a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0h-1a3 3 0 0 1-3-3v-1.004L9.488 15.74a2 2 0 0 1-2.233-.904L4.239 9.81a1.5 1.5 0 0 1 .898-2.22l11.917-3.193a3 3 0 0 1 3.674 2.121ZM2.833 10.315a1 1 0 0 1 1.304.255l.065.097 1.625 2.749a1 1 0 0 1-1.656 1.114l-.065-.096-1.625-2.75a1 1 0 0 1 .352-1.37Zm14.739-3.987L6.295 9.349l2.674 4.46 10.863-2.91-1.036-3.864a1 1 0 0 0-1.224-.707"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Camcorder2Line'

/**
 * MingCute Icon: Camcorder 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Camcorder2Line = memo(Icon)
