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
          d="M14.33 2.307a3 3 0 0 1 2.12 3.674l-1.035 3.864 1.358.363c1.654.444 2.51 2.12 2.278 3.656-.11.729-.154 1.446-.065 1.968.185 1.084.808 2.146 1.458 3.073l.354.492A1 1 0 0 1 20 21H5.5c-.32 0-.627-.158-.813-.418-.489-.684-.838-1.458-1.125-2.244-.5-1.364-.917-3.293-.548-5.502a11.633 11.633 0 0 1 1.428-3.994c.655-1.108 1.931-1.42 2.991-1.136l2.187.586 1.035-3.864a3 3 0 0 1 3.674-2.121ZM7.978 15a1 1 0 0 0-.993 1.007c.007 1.024.327 2.005.669 2.77l.102.223h2.277a8.944 8.944 0 0 1-.392-.699c-.31-.617-.583-1.348-.644-2.047l-.012-.261A1 1 0 0 0 7.979 15Zm4.608-10.054-1.294 4.83a1 1 0 0 1-1.225.706l-3.152-.844c-.383-.103-.646.043-.751.221a9.111 9.111 0 0 0-.703 1.494l11.51 3.053c.025-.293.061-.578.101-.842.105-.69-.297-1.284-.818-1.424l-2.323-.622a1 1 0 0 1-.707-1.225l1.294-4.83a1 1 0 0 0-1.932-.517"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Brush3Fill'

/**
 * MingCute Icon: Brush 3 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Brush3Fill = memo(Icon)
