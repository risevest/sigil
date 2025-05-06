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
          d="M12 2a1 1 0 0 1 .832.445l5.804 8.707-5.227 2.178-1.21-8.877c-.032-.23-.366-.23-.397 0l-1.21 8.877-5.228-2.178 5.804-8.707A1 1 0 0 1 12 2m.385 13.923 5.818-2.424-5.37 8.056a1 1 0 0 1-1.665 0l-5.37-8.056 5.817 2.424a1 1 0 0 0 .77 0"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'EthereumFill'

/**
 * MingCute Icon: Ethereum Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const EthereumFill = memo(Icon)
