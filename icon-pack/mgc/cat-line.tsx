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
          d="M18.296 3.045a1 1 0 0 1 .657.652l.03.119 1.341 7.154c.103.55.151 1.095.148 1.63l-.012.4H21a1 1 0 0 1 .117 1.993L21 15h-.894c-.109.354-.24.699-.392 1.033l-.16.33 1.07.856a1 1 0 0 1-1.146 1.634l-.103-.072-.936-.749A8.427 8.427 0 0 1 12 21a8.423 8.423 0 0 1-6.25-2.755l-.19-.213-.935.749a1 1 0 0 1-1.343-1.477l.093-.085 1.07-.856a8.453 8.453 0 0 1-.435-1.012L3.894 15H3a1 1 0 0 1-.117-1.993L3 13h.54a8.483 8.483 0 0 1 .069-1.619l.067-.411 1.341-7.154a1 1 0 0 1 1.598-.604l.092.08 2.414 2.415a1 1 0 0 0 .576.284L9.828 6h4.344a1 1 0 0 0 .608-.206l.099-.087 2.414-2.414a1 1 0 0 1 1.003-.248m-.93 3.003L16.293 7.12a3 3 0 0 1-2.121.88H9.828a3 3 0 0 1-2.12-.879L6.632 6.048l-.992 5.29A6.5 6.5 0 0 0 5.545 13H7a1 1 0 1 1 0 2h-.492a.998.998 0 0 1 .71 1.696l-.095.086A6.436 6.436 0 0 0 12 19a6.43 6.43 0 0 0 4.696-2.02l.18-.2a1 1 0 0 1 .616-1.78H17a1 1 0 1 1 0-2h1.455a6.496 6.496 0 0 0-.096-1.662zm-3.472 9.005a1 1 0 0 1-.447 1.342l-.553.276a2 2 0 0 1-1.788 0l-.553-.276a1 1 0 0 1 .894-1.79l.553.277.553-.276a1 1 0 0 1 1.341.447M9.5 10a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CatLine'

/**
 * MingCute Icon: Cat Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CatLine = memo(Icon)
