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
          d="M4.74 16.877A9.972 9.972 0 0 0 12 20a9.955 9.955 0 0 0 4.797-1.224l.302-.172.77.77a1.7 1.7 0 0 0 1.622.446c-.12.147-.254.28-.392.398-.479.408-1.113.731-1.81.983-1.401.505-3.271.799-5.289.799s-3.888-.294-5.29-.8c-.696-.25-1.33-.574-1.809-.982-.475-.406-.901-.992-.901-1.745 0-.663.327-1.194.74-1.596M12 2a8 8 0 0 1 6.461 12.718l-.186.244 1.503 1.503a1 1 0 0 1-1.32 1.497l-.094-.083L4.222 3.737a1 1 0 0 1 1.32-1.497l.094.083 1.402 1.402A7.966 7.966 0 0 1 12 2M4.868 6.373l3.159 3.16a4 4 0 0 0 4.44 4.44l3.16 3.16a8 8 0 0 1-10.76-10.76ZM12 6c-.768 0-1.486.217-2.095.592l1.499 1.498a2 2 0 0 1 2.506 2.506l1.498 1.499A4 4 0 0 0 12 6"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ComputerCameraOffFill'

/**
 * MingCute Icon: Computer Camera Off Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ComputerCameraOffFill = memo(Icon)
