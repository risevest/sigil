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
          d="M14.586 3A2 2 0 0 1 16 3.586L17.414 5H20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2.586L8 3.586A2 2 0 0 1 9.414 3zm-5.93 9.5a1 1 0 0 0-.963.693l-.645 2a1 1 0 0 0 1.903.616 4.498 4.498 0 0 0 6.906-.99 1 1 0 1 0-1.713-1.031 2.502 2.502 0 0 1-4.54-.573 1 1 0 0 0-.948-.715M12 8a4.493 4.493 0 0 0-3.857 2.18 1 1 0 1 0 1.714 1.032A2.494 2.494 0 0 1 12 10c1.131 0 2.09.752 2.397 1.785a1 1 0 0 0 1.867.132l.043-.11.645-2a1 1 0 0 0-1.903-.616A4.483 4.483 0 0 0 12 8"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CameraRotateFill'

/**
 * MingCute Icon: Camera Rotate Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CameraRotateFill = memo(Icon)
