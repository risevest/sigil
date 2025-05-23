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
          d="m15.535 2.808 5.657 5.656a2 2 0 0 1 0 2.829l-3.522 3.523-.013.012-.013.013L13.485 19H20a1 1 0 1 1 0 2H8.893a1.5 1.5 0 0 1-1.06-.44l-5.026-5.024a2 2 0 0 1 0-2.829l9.9-9.9a2 2 0 0 1 2.828 0Zm0 11.313L10.657 19H9.1l-4.878-4.879 5.657-5.657zm1.415-1.414L11.293 7.05l2.828-2.828 5.657 5.657z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'EraserLine'

/**
 * MingCute Icon: Eraser Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const EraserLine = memo(Icon)
