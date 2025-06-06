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
          d="M10 4a2 2 0 0 0-2 2v1.043a5 5 0 0 0-2.879 1.421l-2.828 2.829a1 1 0 1 0 1.414 1.414L6.536 9.88A3 3 0 0 1 8 9.073v3.646l-.625.5a1 1 0 0 0 1.25 1.562l2.903-2.323a2 2 0 0 1 2.664.148l.286.286L7.933 17.8a1 1 0 0 1-.6.2H3a1 1 0 1 0 0 2h4.333a3 3 0 0 0 1.8-.6L15 15h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 7.12.279-.223a4 4 0 0 1 5.327.295l.286.286c.421.421.612.978.583 1.522H20V9H10zM20 7V6H10v1z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'HandCardLine'

/**
 * MingCute Icon: Hand Card Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HandCardLine = memo(Icon)
