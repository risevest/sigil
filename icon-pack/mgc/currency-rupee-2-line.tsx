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
          d="M7 6a1 1 0 1 1 0-2h11a1 1 0 1 1 0 2h-4.528a5.98 5.98 0 0 1 1.445 3H18a1 1 0 1 1 0 2h-3.083a6.005 6.005 0 0 1-4.913 4.916l4.577 3.27a1 1 0 1 1-1.162 1.628l-6.987-4.991A.99.99 0 0 1 6 15.016a1.015 1.015 0 0 1 .243-.67.99.99 0 0 1 .77-.346H9a4.002 4.002 0 0 0 3.874-3H7a1 1 0 1 1 0-2h5.874A4.002 4.002 0 0 0 9 6z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CurrencyRupee2Line'

/**
 * MingCute Icon: Currency Rupee 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyRupee2Line = memo(Icon)
