import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 2.5c.921 0 1.785.262 2.524.717.415.255.944.654 1.347 1.16a1 1 0 0 1-1.48 1.34l-.085-.094c-.21-.264-.533-.52-.83-.702-.437-.27-.94-.421-1.476-.421-.877 0-1.612.295-2.124.803C9.37 9.807 9 10.6 9 11.75c0 1.001.276 1.833.71 2.39.417.536 1.005.86 1.79.86.48 0 1.099-.35 1.66-1.059a4.54 4.54 0 0 0 .576-.941H13a1 1 0 1 1 0-2h2a2 2 0 0 1 2 2v2.5a1 1 0 1 1-2 0v-.686a6.467 6.467 0 0 1-.272.37C14.002 16.1 12.87 17 11.5 17c-1.424 0-2.586-.627-3.367-1.63C7.369 14.389 7 13.096 7 11.75c0-1.6.526-2.932 1.467-3.866C9.403 6.955 10.668 6.5 12 6.5"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'GumroadLine'

/**
 * MingCute Icon: Gumroad Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const GumroadLine = memo(Icon)
