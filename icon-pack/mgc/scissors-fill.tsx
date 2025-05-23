import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M18.172 4.945a2.5 2.5 0 0 0-.614-3.481l-.41-.287-5.146 7.35-5.147-7.35-.41.287a2.5 2.5 0 0 0-.613 3.481l4.339 6.197-1.8 2.57a4.5 4.5 0 1 0 2.39 1.816l1.24-1.77 1.24 1.768a4.5 4.5 0 1 0 2.392-1.815l-1.8-2.569zM5.5 18a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m10 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ScissorsFill'

/**
 * MingCute Icon: Scissors Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ScissorsFill = memo(Icon)
