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
          d="M6 2.5a4.5 4.5 0 0 1 4.287 5.87l2.57 1.8 6.198-4.338a2.5 2.5 0 0 1 3.481.613l.287.41-5.927 4.15A1 1 0 1 1 17 13l-.11-.006 5.933 4.154-.287.41a2.5 2.5 0 0 1-3.482.614l-6.196-4.34-2.57 1.8a4.5 4.5 0 1 1-4.5-3.127L6 12.5c.045 0 .09 0 .135.002a.995.995 0 0 1 0-1.004L6 11.5a4.5 4.5 0 0 1 0-9m0 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m2.471-4.739a4.47 4.47 0 0 1-.865.444.998.998 0 0 1 0 1.59c.307.117.598.267.868.445l1.769-1.238-1.772-1.24ZM3 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2m18 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-4.9.562-.627.44.63.441a.996.996 0 0 1-.002-.88ZM6 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Scissors3Fill'

/**
 * MingCute Icon: Scissors 3 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Scissors3Fill = memo(Icon)
