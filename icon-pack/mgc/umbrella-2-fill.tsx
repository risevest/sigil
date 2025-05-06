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
          d="M17 3.34a1 1 0 0 1 .366 1.366l-.027.047a9.004 9.004 0 0 1 2.956 10.741c-.482 1.14-1.81 1.405-2.733.872l-5.186-2.994L9.21 19H20a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2h2.915l3.729-6.628-5.206-3.006c-.924-.533-1.358-1.816-.611-2.803a9.004 9.004 0 0 1 10.78-2.81l.027-.047A1 1 0 0 1 17 3.34"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Umbrella2Fill'

/**
 * MingCute Icon: Umbrella 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Umbrella2Fill = memo(Icon)
