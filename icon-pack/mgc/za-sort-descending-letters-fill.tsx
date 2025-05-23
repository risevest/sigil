import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M8 12a2.21 2.21 0 0 1 2.016 1.305l.065.161 2.332 6.53a1.5 1.5 0 0 1-2.77 1.142l-.056-.134-.18-.504H6.593l-.18.505a1.5 1.5 0 0 1-2.868-.871l.042-.139 2.332-6.529A2.21 2.21 0 0 1 8 12m9-9a1.5 1.5 0 0 1 1.5 1.5v11.707l.268-.268a1.5 1.5 0 1 1 2.121 2.122l-2.828 2.828a1.5 1.5 0 0 1-2.122 0l-2.828-2.828a1.5 1.5 0 1 1 2.121-2.122l.268.268V4.5A1.5 1.5 0 0 1 17 3M8 16.56l-.336.94h.672zM10.758 2c1.378 0 2.091 1.61 1.227 2.628l-.095.103L8.62 8H11a1.5 1.5 0 0 1 .144 2.993L11 11H5.24c-1.378 0-2.09-1.61-1.226-2.628l.095-.103L7.379 5h-2.38a1.5 1.5 0 0 1-.144-2.993L5 2h5.759Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ZaSortDescendingLettersFill'

/**
 * MingCute Icon: Za Sort Descending Letters Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ZaSortDescendingLettersFill = memo(Icon)
