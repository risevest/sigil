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
          d="M11 3a1 1 0 0 1 1 1v3.382l2.553-1.276a1 1 0 0 1 .894 1.788L12 9.618v1.764l2.553-1.276a1 1 0 1 1 .894 1.788L12 13.618v5.218a7.503 7.503 0 0 0 2.287-1.145c1.229-.894 2.312-2.209 2.743-3.933a1 1 0 0 1 1.94.485c-.569 2.275-1.986 3.96-3.507 5.066C13.968 20.396 12.266 21 11 21a1 1 0 0 1-1-1v-5.382l-2.553 1.276a1 1 0 1 1-.894-1.788L10 12.382v-1.764l-2.553 1.276a1 1 0 1 1-.894-1.788L10 8.382V4a1 1 0 0 1 1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CurrencyLira2Line'

/**
 * MingCute Icon: Currency Lira 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyLira2Line = memo(Icon)
