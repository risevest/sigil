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
          d="M12 2a1 1 0 0 1 .832.445l5.987 8.981a.998.998 0 0 1 .007 1.137l-5.994 8.992a1 1 0 0 1-1.664 0l-5.994-8.992a.997.997 0 0 1-.097-.947.996.996 0 0 1 .104-.19l5.987-8.98A1 1 0 0 1 12 2m1 4.303 3.442 5.162L13 12.613zm-2 0v6.31l-3.442-1.148zm1 12.894L8.449 13.87l3.235 1.079a1 1 0 0 0 .632 0l3.235-1.079z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'EthereumLine'

/**
 * MingCute Icon: Ethereum Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const EthereumLine = memo(Icon)
