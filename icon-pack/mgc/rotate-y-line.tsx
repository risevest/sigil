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
          d="M12 2c.852 0 1.505.519 1.953 1.088.458.581.826 1.36 1.117 2.232.585 1.755.93 4.117.93 6.68 0 2.563-.345 4.925-.93 6.68-.29.873-.66 1.651-1.117 2.232-.448.57-1.1 1.088-1.953 1.088-1.197 0-2-.998-2.486-1.923-.532-1.008-.933-2.373-1.189-3.914a1 1 0 0 1 1.974-.326c.235 1.422.589 2.558.984 3.308.198.376.383.61.53.74.194.17.334.07.469-.087l.1-.124c.26-.33.539-.87.79-1.626.501-1.502.828-3.64.828-6.048s-.327-4.546-.827-6.048c-.252-.756-.53-1.296-.79-1.626l-.096-.116c-.145-.164-.296-.262-.497-.074-.163.152-.363.422-.57.844a8.55 8.55 0 0 0-.522 1.387 1 1 0 0 1 .85 1.725l-.099.078-1.617 1.132a.997.997 0 0 1-1.385-.186L7.271 7.433A1 1 0 0 1 8.704 6.07c.201-.742.443-1.41.721-1.974.271-.55.6-1.048 1-1.422C10.831 2.294 11.363 2 12 2m1 9v2H5a1 1 0 0 1-.117-1.993L5 11zm6 0h-2v2h2a1 1 0 1 0 0-2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'RotateYLine'

/**
 * MingCute Icon: Rotate Y Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RotateYLine = memo(Icon)
